import React from 'react'
import "./css/announcements.css";


class Announcements extends React.Component {
  constructor(props){
    super(props)
    this.state = {
			announcements : []
		}
  }
	componentDidMount() {
    fetch('http://localhost:8000/announcements/')
			.then(async (res) => await res.json())
			.then((announcements) =>
				this.setState((state) => {
					return state.announcements.push(announcements)
				})
			)
	}
	setAnnouncements(){
		return (
			console.log(this.state.announcements[0].map((el) => {
							return (
								<div className="one-announcement">
								<div className="bold"> By {el.title}, </div>
								<div className="bold"> {el} </div>
								<br />
								<br />
								<div className="message">
								{
									'{ANNOUNCEMENT: This is to notify that the electricity supply will be cut off from 12:00 hours to 16:00 hours, on 31st July, 2022, due to renovation work.}'
								}
								</div>
								<br />
								</div>
								)
								})
					)
		)
	}
	render() {
		return (
				<div className="announcements">
				<div className="announcements-heading">
					<h1 className="announcements-title">Announcements</h1>
				</div>
				{this.setAnnouncements()}
				</div>
		)
	}
}


export default Announcements;
