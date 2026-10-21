/** Server-side validation - mirrors the checks in the website's forms. Never trust the browser alone. */
const LEVELS = ['Class 9-10', 'Class 11-12', 'Diploma', 'Undergraduate', 'Postgraduate', 'Doctoral'];
const GENDERS = ['Female', 'Male', 'Other', 'Prefer not to say'];
const SOCIAL = ['General', 'OBC', 'SC', 'ST', 'EWS'];
const INST_TYPES = ['College / University', 'Foundation', 'Trust', 'NGO', 'Government Body', 'Company (CSR)'];

const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRe = /^[6-9]\d{9}$/;
const urlRe = /^https?:\/\/.+\..+/;

class ValidationError extends Error {
  constructor(errors) { super(Object.values(errors)[0]); this.status = 400; this.errors = errors; }
}

/** Build a validator: v.str('email', {...}) etc. collect errors, v.done() throws if any. */
function validator(body) {
  const errors = {}, out = {};
  const raw = (k) => (body && body[k] !== undefined && body[k] !== null ? String(body[k]).trim() : '');
  const api = {
    str(k, { required = true, min = 0, max = 255, re, msg, oneOf } = {}) {
      const v = raw(k);
      if (!v) { if (required) errors[k] = msg || `${k} is required.`; else out[k] = null; return api; }
      if (v.length < min || v.length > max || (re && !re.test(v)) || (oneOf && !oneOf.includes(v))) errors[k] = msg || `${k} is not valid.`;
      out[k] = v; return api;
    },
    num(k, { required = true, min = -Infinity, max = Infinity, msg } = {}) {
      const s = raw(k);
      if (!s) { if (required) errors[k] = msg || `${k} is required.`; else out[k] = null; return api; }
      const v = Number(s);
      if (!Number.isFinite(v) || v < min || v > max) errors[k] = msg || `${k} is not valid.`;
      out[k] = v; return api;
    },
    yesno(k) { out[k] = raw(k) === 'yes' ? 1 : 0; return api; },
    date(k, { future = false, msg } = {}) {
      const v = raw(k);
      const d = new Date(v + 'T00:00:00');
      const today = new Date(); today.setHours(0, 0, 0, 0);
      if (!/^\d{4}-\d{2}-\d{2}$/.test(v) || isNaN(d) || (future && d < today)) errors[k] = msg || `${k} is not a valid date.`;
      out[k] = v; return api;
    },
    done() { if (Object.keys(errors).length) throw new ValidationError(errors); return out; },
  };
  return api;
}

module.exports = { validator, ValidationError, LEVELS, GENDERS, SOCIAL, INST_TYPES, emailRe, phoneRe, urlRe };
