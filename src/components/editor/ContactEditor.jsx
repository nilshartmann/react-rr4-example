import React from 'react';

function Input({type = 'text', readonly, object, propertyname, onChange}) {
  return <input
    readOnly={readonly}
    type={type}
    name={propertyname}
    value={object ? object[propertyname] || '' : ''}
    onChange={e => onChange(e.tafet.name, e.target.value) }
    />;
}


export default class ContactEditor extends React.Component {

  constructor(props) {
    super(props);

    this.onInputChange = this.onInputChange.bind(this);
    this.save = this.save.bind(this);
    this.cancel = this.cancel.bind(this);

    this.state = {
      contact: Object.assign({}, props.contact)
    };
  }

  componentWillReceiveProps(newProps) {
    this.setState({ contact: Object.assign({}, newProps.contact) });
  }

  onInputChange(name, value) {
    this.setState({
      contact: Object.assign(
        {},
        this.state.contact,
        { [name]: value }
      )
    });
  }

  save() {
    const { stopEditing, saveContact } = this.props;
    const { contact } = this.state;

    saveContact(contact);
    // stopEditing();
  }

  cancel() {
    const { stopEditing, saveContact } = this.props;
    const { contact } = this.state;

    stopEditing();
  }

  render() {
    const { editing, startEditing } = this.props;
    const { contact } = this.state;
    const saveButtonTitle = contact.pk ? 'Save' : 'Add';

    const readonly = !editing;
    return <form>
          <label>Name
            <Input readonly={readonly} object={contact} propertyname='name' onChange={this.onInputChange} />
          </label>
          <label>E-Mail
            <Input type='email' readonly={readonly} object={contact} propertyname='email' onChange={this.onInputChange} />
          </label>
          <div className='formrow-left'>
          <label>Zip Code
            <Input type='number' readonly={readonly} object={contact} propertyname='zipcode' onChange={this.onInputChange} />
          </label>
          </div>
          <div className='formrow-right'>
          <label>City
            <Input type='text' readonly={readonly} object={contact} propertyname='city' onChange={this.onInputChange} />
          </label>
          </div>
        { editing === true
          ?
          <div className='button-bar'>
              <button type='button' className='secondary small button' onClick={this.cancel}>Cancel</button>
              <button type='button' className='success button' onClick={this.save}>{saveButtonTitle}</button>
          </div>
          :
         <div className='button-bar'>
            <button type='button' className='success button' onClick={startEditing}>Edit</button>
          </div>
        }
    </form >;
  };
}
