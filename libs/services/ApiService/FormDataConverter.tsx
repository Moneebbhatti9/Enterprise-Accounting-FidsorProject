// FormDataConverter.ts

class FormDataConverter {
  private formData: FormData;

  constructor() {
    this.formData = new FormData();
  }

  private createFormData(data: any, subKeyStr = '') {
    Object.keys(data).forEach((key) => {
      let value = data[key];
      const subKeyStrTrans = subKeyStr + key;

      if (Array.isArray(data[key])) {
        data[key].forEach((item: any, index: number) => { // Add type annotations here
          this.createFormData(item, subKeyStrTrans + `[${index}].`);
        });
      } else if (
        Object.prototype.toString.call(data[key]) === '[object Object]' &&
        data[key] !== null
      ) {
        this.createFormData(data[key], subKeyStrTrans + '.');
      } else {
        if (value == null || value == undefined || value == '') {
          return;
        }
        if (Object.prototype.toString.call(value) === '[object Date]') {
          value = this.formatDate(value);
        }
        this.formData.append(subKeyStrTrans, value ? value : '');
      }
    });
  }

  public convertObjectToFormData(mainObject: any) {
    this.createFormData(mainObject);
    return this.formData;
  }

  private formatDate(value: Date) {
    const _unformattedDate = new Date(value);
    const month =
      _unformattedDate.getMonth() + 1 <= 9
        ? '0' + (_unformattedDate.getMonth() + 1)
        : _unformattedDate.getMonth() + 1;
    const day =
      _unformattedDate.getDate() <= 9
        ? '0' + _unformattedDate.getDate()
        : _unformattedDate.getDate();
    const year = _unformattedDate.getFullYear();

    return year + '-' + month + '-' + day;
  }
}

export default FormDataConverter;
