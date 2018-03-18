import React, { Component } from "react";
import { NavigationActions } from 'react-navigation';
import firebase from 'firebase';
import {
	Content,
	Text,
	List,
	ListItem,
	Icon,
	Container,
	Left,
	Right,
	Badge,
	Button,
	View,
	StyleProvider,
	getTheme,
	variables,
} from "native-base";

import styles from "./style";

const datas = [
	{
		name: "Home",
		route: "screen1",
		icon: "phone-portrait",
		bg: "#C5F442",
	},
	{
		name: "Users",
		route: "screen2",
		icon: "easel",
		bg: "#C5F442",
	},
	{
		name: "Logout",
		route: "logout",
		icon: "easel",
		bg: "#C5F442",
	},
];

class SideBar extends Component {
	logout = () => {
		firebase.auth().signOut();
	}
	router = (routeName)=>
	{
		if(routeName==="logout")
		{
			this.logout();
		}
		else
		{
			this.props.navigation.navigate(routeName);
		}
		
	}
	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.router(data.route)}>
								<Left>
									<Icon active name={data.icon} style={{ color: "#777", fontSize: 26, width: 30 }} />
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
							</ListItem>}>
					</List>
				</Content>
			</Container>
		);
	}
}

export default SideBar;
