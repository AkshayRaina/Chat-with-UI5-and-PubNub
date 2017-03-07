sap.ui.jsview("chatapp.chat", {

	/**
	 * Specifies the Controller belonging to this View. In the case that it is
	 * not implemented, or that "null" is returned, this View does not have a
	 * Controller.
	 * 
	 * @memberOf chatapp.chat
	 */
	getControllerName : function() {
		return "chatapp.chat";
	},

	/**
	 * Is initially called once after the Controller has been instantiated. It
	 * is the place where the UI is constructed. Since the Controller is given
	 * to this method, its event handlers can be attached right away.
	 * 
	 * @memberOf chatapp.chat
	 */
	createContent : function(oController) {
		var oCol1 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Name"
			})
		});
		var oCol2 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Description"
			}),
		});
		var oCol3 = new sap.m.Column({
			header : new sap.m.Label({
				text : "Channel Name"
			})
		});

		var oTableItems = new sap.m.ColumnListItem({
			cells : [ new sap.m.Text({
				text : "{table>Name}"
			}), new sap.m.Text({
				text : "{table>Description}"
			}), new sap.m.Text({
				text : "{table>Channel}"
			}) ]
		});

		var oTable = new sap.m.Table({
			columns : [ oCol1, oCol2, oCol3 ]
		});

		oTable.bindItems({
			path : "table>/",
			template : oTableItems
		});
		
		var oTimelineItem = new sap.suite.ui.commons.TimelineItem({
			dateTime : "Date({chat>one_piece/timestamp})",
		   	text : "{chat>one_piece/message}",
			userName : "{chat>one_piece/username}",
			icon : "sap-icon://person-placeholder"
		})
		
		var oTimeline = new sap.suite.ui.commons.Timeline({
			noDataText : "Sorry no messages here",
			content : oTimelineItem
		})

		var oImg = new sap.m.Image({
			src : "https://images4.alphacoders.com/641/thumb-1920-641968.jpg",
			width : "100%"
		})

		var oScrollContainer = new sap.m.ScrollContainer({
			width : "100%",
			height : "75%",
			horizontal : false,
			vertical : true,
			content : [ oTimeline ]
		});

		var oInp = new sap.m.Input({
			placeholder : "Enter your message and Press ↵ to submit.",
			submit: [oController.sendMessage, oController]
		});

		return new sap.m.Page({
			title : "Title",
			content : [ oTable, oScrollContainer, oInp ]
		});
	}

});