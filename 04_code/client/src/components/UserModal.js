import React, {Component} from 'react';
import{
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addUser } from '../actions/userActions';

class UserModal extends Component{
    state = {
        modal: false,
        user: ''
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        })
    }
    // onChange = e => {
    //     this.setState({
    //         [e.target.username]: e.target.value
    //     });
    // }
    onSubmit = e => {
        e.preventDefault();
        const newUser = {
            username: this.state.username,
            email: this.state.email,
            phone: this.state.phone

        }
        this.props.addUser(newUser);
        this.toggle();
    }
    render(){
        return (
            <div>
                <Button
                color = 'dark'
                style = {{marginBottom: '2rem'}}
                onClick = {this.toggle}
                >Add User</Button>

                <Modal
                isOpen = {this.state.modal}
                toggle = {this.toggle}
                >
                <ModalHeader toggle={this.toggle}>Add to User list</ModalHeader>
                <ModalBody>
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup>
                            <Label for='user'>User</Label>
                            <Input
                                type="text"
                                name="username"
                                id="username"
                                placeholder="Add username"
                                value={this.state.username}
                                onChange = {e => this.setState({username: e.target.value})}
                            />
                            <Input
                                type="text"
                                name="name"
                                id="email"
                                placeholder="Add email"
                                value={this.state.email}
                                onChange = {e => this.setState({email: e.target.value})}
                            />
                            <Input
                                type="text"
                                name="name"
                                id="phone"
                                placeholder="Add phone"
                                value={this.state.phone}
                                onChange = {e => this.setState({phone: e.target.value})}
                            />
                            <Button
                                color= "dark"
                                style={{marginTop: '2rem'}}
                                block
                            >
                                Add User
                            </Button>
                        </FormGroup>
                    </Form>
                </ModalBody>

                </Modal>
            </div>
        )
    }

}

const mapStateToProps = state => ({
    user: state.user
})
export default connect(mapStateToProps, { addUser })(UserModal);