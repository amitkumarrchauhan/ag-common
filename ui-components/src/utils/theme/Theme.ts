const themes = ['aqua', 'winter'];
const prefix = 'ag-';

export const Theme = {
  getPrefix() {
    return prefix;
  },

  getDefault() {
    return themes[0];
  },
};
