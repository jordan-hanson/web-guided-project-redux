import React from 'react';
import { addMember } from '../actions/dragonListActions'
import { connect } from 'react-redux'

class DragonList extends React.Component {
  state = {
    newMember: ''
  };

  handleChanges = e => {
    this.setState({ newMember: e.target.value });
  };
  handleClick = () => {
    console.log(this.props)
    this.props.addMember(this.state.newMember)
    this.setState({ newMember: '' })
  }

  render() {
    const { members } = this.props;
    console.log(this.props)
    return (
      <React.Fragment>
        <div className="friends-list">
          {members.map((member, index) => (
            <h4 key={index}>
              {member.name}
              {member.dragonStatus && <i className="fas fa-dragon" />}
            </h4>
          ))}
        </div>
        <input
          type="text"
          value={this.state.newMember}
          onChange={this.handleChanges}
          placeholder="Add new member"
        />
        <button onClick={this.handleClick}>Add member</button>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => {
  console.log(state)
  return {
    members: state.members
  }
}

export default connect(mapStateToProps, { addMember })(DragonList);
