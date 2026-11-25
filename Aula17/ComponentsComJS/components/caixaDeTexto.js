export class TextBoxComponent {
  constructor({
    type = 'text',         // 'text' | 'password' | 'email' | 'number' etc.
    value = '',
    placeholder = 'Digite aqui...',
    label = '',            // Rótulo opcional acima do input
    name = '',
    id = '',
    iconLeft = '',         // ex: 'ph ph-envelope'
    iconRight = '',        // ex: 'ph ph-eye-slash'
    disabled = false,
    required = false,
    error = '',            // Mensagem de erro
    className = '',
    data = {},
  } = {}) {
    this.type = type;
    this.value = value;
    this.placeholder = placeholder;
    this.label = label;
    this.name = name;
    this.id = id || (name ? `input-${name}` : '');
    this.iconLeft = iconLeft;
    this.iconRight = iconRight;
    this.disabled = disabled;
    this.required = required;
    this.error = error;
    this.className = className;
    this.data = data;
  }

  render() {
    // Classes para o container principal do input

    const idAttr = this.id ? `id="${this.id}"` : '';
    const nameAttr = this.name ? `name="${this.name}"` : '';
    const valueAttr = this.value ? `value="${this.value}"` : '';
    const disabledAttr = this.disabled ? 'disabled' : '';
    const requiredAttr = this.required ? 'required' : '';

    return /* html */ `
      <div class="">
        ${
          this.label
            ? `<label class="" ${
                this.id ? `for="${this.id}"` : ''
              }>${this.label}${
                this.required
                  ? ' <span class="">*</span>'
                  : ''
              }</label>`
            : ''
        }
        
        <div class="">
          ${
            this.iconLeft
              ? `<i class="${this.iconLeft}"></i>`
              : ''
          }
          
          <input
            type="${this.type}"
            class="${this.className}"
            placeholder="${this.placeholder}"
            ${idAttr}
            ${nameAttr}
            ${valueAttr}
            ${disabledAttr}
            ${requiredAttr}
          />

          ${
            this.iconRight
              ? `<i class="${this.iconRight}"></i>`
              : ''
          }
        </div>

        ${
          this.error
            ? `<span class="" role="alert">${this.error}</span>`
            : ''
        }
      </div>
    `;
  }
}