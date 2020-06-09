import React from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserTable from './components/UserTable';
import UserInfoModal from './components/UserInfoModal';
import "./css/style.scss";
import {
	requestUserList,
	requestUserInfo
} from '../actions/index';

class ComponentContainer extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			isShowUserInfoModal: false
		}

		this.maxUser = 100;

		this.fetchUserList = this.fetchUserList.bind(this);
		this.getUserInfo = this.getUserInfo.bind(this);
		this.showUserInfoModal = this.showUserInfoModal.bind(this);
	}

	showUserInfoModal(isShow, data) {
		if (isShow) {
			this.getUserInfo(data);
		}
		
		this.setState({
			isShowUserInfoModal: (isShow)? isShow : false
    });
	}	

	fetchUserList(index) {
		this.props.requestUserList({ since: index, per_page: this.maxUser });
	}

	getUserInfo(username) {
		this.props.requestUserInfo(username);
	}

	componentDidMount() {
		this.fetchUserList(0);
	}

	componentWillUnmount() {

	}

	render() {
		return (
			<div className="componentBlock">
				<div className="displayBlock">
					<UserTable
						list={ this.props.userList }
						showUserInfoModal= { this.showUserInfoModal }
						switchPage= { this.handleFetchUserList }
					/>
				</div>
				<UserInfoModal
					show={ this.state.isShowUserInfoModal }
					hideModal={ () => this.showUserInfoModal(false) }
					infoData={ this.props.userInfo }
				/>
			</div>
		)
	}
}

function mapStateToProps(state) {
  return {
		userList: state.info.userList,
		userInfo: state.info.userInfo,
  }
}

function mapDispatchToProps(dispatch) {
  return {
		requestUserList: bindActionCreators(requestUserList, dispatch),
		requestUserInfo: bindActionCreators(requestUserInfo, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentContainer);