import React, { useState, useEffect } from "react";
import { Pagination, Table, Badge } from 'react-bootstrap';

export default function UserTable(props) {
	const [userListView, setUserListView] = useState([]);
	const [sizePerPage, setSizePerPage] = useState(20);
	const [currentPage, setCurrentPage] = useState(1);
	const [maxPage, setMaxPage] = useState(1);
	const SWITCH_PG_BTN = { FIRST: 'first', PREV: 'prev', NEXT: 'next', LAST: 'last' };

	function showUserInfo(username) {
		props.showUserInfoModal(true, username);
	}

	function listFormatter() {
		let newList = (props.list)? props.list : [];
		let startIdx = (currentPage - 1) * sizePerPage;
		let endIdx = (startIdx + sizePerPage > newList.length)? newList.length : startIdx + sizePerPage;
		let listItem = [];

		for (let i = startIdx; i < endIdx; ++i) {
			listItem.push(
				<tr key={"listItem_" + i} onClick={ () => showUserInfo(newList[i].login) }>
					<td className="idxTitle">{ i + 1 }</td>
					<td>{ newList[i].id }</td>
					<td>{ newList[i].login }</td>
					<td>
						{
							(newList[i].site_admin)? (
								<Badge variant="primary">{ "True" }</Badge>
							) : <Badge variant="secondary">{ "False" }</Badge>
						}
					</td>
					<td>
						<a href={newList[i].avatar_url}>{ newList[i].avatar_url }</a>						
					</td>
				</tr>
			);
		}

		setUserListView(listItem);
	}

	function maxPageFormatter() {
		let listLength = (props.list)? props.list.length : 0;
		if (listLength == 0)
			setMaxPage(1);
		else
			setMaxPage(Math.ceil(listLength / sizePerPage));
	}

	function currentPageFormatter(curPage) {
		if (curPage > 0 && curPage <= maxPage) {
			setCurrentPage(curPage);
		}
	}

	function switchPage(type) {
		switch(type) {
			case SWITCH_PG_BTN.FIRST:
				currentPageFormatter(1);
				break;
			case SWITCH_PG_BTN.PREV:
				currentPageFormatter(currentPage - 1);
				break;
			case SWITCH_PG_BTN.NEXT:
				currentPageFormatter(currentPage + 1);
				break;
			case SWITCH_PG_BTN.LAST:
				currentPageFormatter(maxPage);
				break;
			default:
				return;
		}
	}
	
	useEffect(() => {		
		listFormatter();
		maxPageFormatter();		

		return () => {
			
		};
	}, [props.list]);

	useEffect(() => {		
		listFormatter();

		return () => {
			
		};
	}, [currentPage]);

	return (
		<div className="tableBlock">
			<div className="tableArea">
				<Table striped bordered hover responsive>
					<thead>
						<tr>
							<th>#</th>	
							<th>Number</th>						
							<th>Login</th>
							<th>Site Admin</th>
							<th>Avatar URL</th>
						</tr>
					</thead>
					<tbody>
						{ userListView }
					</tbody>
				</Table>
			</div>
			<div className="paginationArea">
				<Pagination size="lg">
					<Pagination.First disabled={ currentPage === 1 } onClick={ () => switchPage(SWITCH_PG_BTN.FIRST) } />
					<Pagination.Prev disabled={ currentPage === 1 } onClick={ () => switchPage(SWITCH_PG_BTN.PREV) } />
					<Pagination.Next disabled={ currentPage === maxPage }	onClick={ () => switchPage(SWITCH_PG_BTN.NEXT) } />
					<Pagination.Last disabled={ currentPage === maxPage } onClick={ () => switchPage(SWITCH_PG_BTN.LAST) } />
				</Pagination>
			</div>
		</div>
	);
}