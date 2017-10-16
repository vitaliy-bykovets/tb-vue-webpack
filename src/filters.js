export default {
  toPhoneNumber: function (value) {
    if (!value) return '';

    return value.replace(/(\d{3})(\d{2})(\d{2})(\d{3})/, "($1)$2-$3-$4");
  }
}