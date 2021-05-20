jQuery( document ).ready(function() {

	///////////////////////////////////////////////
	/////////   Get current date / time    ////////
	///////////////////////////////////////////////

	var dt = new Date();

	// Today's date
	var year = dt.getFullYear();
	var month = dt.getMonth();
	month ++;
	var day = dt.getDate();
	var date =  day + "." + month + "." + year;

	// Current time
	var timeNowHour = dt.getHours();
	var timeNowMinutes = dt.getMinutes();

	//// Convert hours and minutes in just minutes
	var timeNow = parseInt(timeNowHour) * 60 + parseInt(timeNowMinutes);

	//// Today's day of the week 0 = Sun, 1 = Mon, ..., 6 = Sat
	var weekday = new Date().getDay();


	///////////////////////////////////
	/////////   Holidays      /////////
	///////////////////////////////////


	/////////////////////////////////////////// ATENTION: Add your holidays here. Please without a zero in front. Use format: d.m.yyyy

	var holidays = new Array("1.1.2019", "25.12.2019");


	///////////////////////////////////////////
	/////////   opening hours         /////////
	///////////////////////////////////////////

	/////////////////////////////////////////// ATENTION: Add your Hours here

	////// Monday

	// opening hours Monday
	var openingHourMonday = 08
	var openingMinutesMonday = 00

	// closing hours Monday
	var closingHourMonday = 16
	var closingMinutesMonday = 00

	////// Tuesday

	// opening hours Tuesday
	var openingHourTuesday = 08
	var openingMinutesTuesday = 00

	// closing hours Tuesday
	var closingHourTuesday = 18
	var closingMinutesTuesday = 00

	////// Wednesday

	// opening hours Wednesday
	var openingHourWednesday = 09
	var openingMinutesWednesday = 30

	// closing hours Wednesday
	var closingHourWednesday = 12
	var closingMinutesWednesday = 00

	////// Thursday

	// opening hours Thursday
	var openingHourThursday = 08
	var openingMinutesThursday = 00

	// closing hours Thursday
	var closingHourThursday = 18
	var closingMinutesThursday = 00

	////// Friday

	// opening hours Friday
	var openingHourFriday = 10
	var openingMinutesFriday = 00

	// closing hours Friday
	var closingHourFriday = 16
	var closingMinutesFriday = 00

	////// Saturday

	// opening hours Saturday
	var openingHourSaturday = 08
	var openingMinutesSaturday = 00

	// closing hours Saturday
	var closingHourSaturday = 13
	var closingMinutesSaturday = 00

	////// Sunday

	// opening hours Sunday
	var openingHourSunday = 00
	var openingMinutesSunday = 00

	// closing hours Sunday
	var closingHourSunday = 00
	var closingMinutesSunday = 00


	//// Parse Hours into Minutes
	var openingTimeMonday = parseInt(openingHourMonday) * 60 + parseInt(openingMinutesMonday);
	var closingTimeMonday = parseInt(closingHourMonday) * 60 + parseInt(closingMinutesMonday);
	var openingTimeTuesday = parseInt(openingHourTuesday) * 60 + parseInt(openingMinutesTuesday);
	var closingTimeTuesday = parseInt(closingHourTuesday) * 60 + parseInt(closingMinutesTuesday);
	var openingTimeWednesday = parseInt(openingHourWednesday) * 60 + parseInt(openingMinutesWednesday);
	var closingTimeWednesday = parseInt(closingHourWednesday) * 60 + parseInt(closingMinutesWednesday);
	var openingTimeThursday = parseInt(openingHourThursday) * 60 + parseInt(openingMinutesThursday);
	var closingTimeThursday = parseInt(closingHourThursday) * 60 + parseInt(closingMinutesThursday);
	var openingTimeFriday = parseInt(openingHourFriday) * 60 + parseInt(openingMinutesFriday);
	var closingTimeFriday = parseInt(closingHourFriday) * 60 + parseInt(closingMinutesFriday);
	var openingTimeSaturday = parseInt(openingHourSaturday) * 60 + parseInt(openingMinutesSaturday);
	var closingTimeSaturday = parseInt(closingHourSaturday) * 60 + parseInt(closingMinutesSaturday);
	var openingTimeSunday = parseInt(openingHourSunday) * 60 + parseInt(openingMinutesSunday);
	var closingTimeSunday = parseInt(closingHourSunday) * 60 + parseInt(closingMinutesSunday);

	// Beautify numbers to double 0
	var openingHourMonday = ("0" + openingHourMonday).slice(-2);
	var openingMinutesMonday = ("0" + openingMinutesMonday).slice(-2);
	var closingHourMonday = ("0" + closingHourMonday).slice(-2);
	var closingMinutesMonday = ("0" + closingMinutesMonday).slice(-2);
	var openingHourTuesday = ("0" + openingHourTuesday).slice(-2);
	var openingMinutesTuesday = ("0" + openingMinutesTuesday).slice(-2);
	var closingHourTuesday = ("0" + closingHourTuesday).slice(-2);
	var closingMinutesTuesday = ("0" + closingMinutesTuesday).slice(-2);
	var openingHourWednesday = ("0" + openingHourWednesday).slice(-2);
	var openingMinutesWednesday = ("0" + openingMinutesWednesday).slice(-2);
	var closingHourWednesday = ("0" + closingHourWednesday).slice(-2);
	var closingMinutesWednesday = ("0" + closingMinutesWednesday).slice(-2);
	var openingHourThursday = ("0" + openingHourThursday).slice(-2);
	var openingMinutesThursday = ("0" + openingMinutesThursday).slice(-2);
	var closingHourThursday = ("0" + closingHourThursday).slice(-2);
	var closingMinutesThursday = ("0" + closingMinutesThursday).slice(-2);
	var openingHourFriday = ("0" + openingHourFriday).slice(-2);
	var openingMinutesFriday = ("0" + openingMinutesFriday).slice(-2);
	var closingHourFriday = ("0" + closingHourFriday).slice(-2);
	var closingMinutesFriday = ("0" + closingMinutesFriday).slice(-2);
	var openingHourSaturday = ("0" + openingHourSaturday).slice(-2);
	var openingMinutesSaturday = ("0" + openingMinutesSaturday).slice(-2);
	var closingHourSaturday = ("0" + closingHourSaturday).slice(-2);
	var closingMinutesSaturday = ("0" + closingMinutesSaturday).slice(-2);
	var openingHourSunday = ("0" + openingHourSunday).slice(-2);
	var openingMinutesSunday = ("0" + openingMinutesSunday).slice(-2);
	var closingHourSunday = ("0" + closingHourSunday).slice(-2);
	var closingMinutesSunday = ("0" + closingMinutesSunday).slice(-2);


	///////////////////////////////
	/////////   Output    /////////
	///////////////////////////////

	//// Check first if holiday
	if(jQuery.inArray(date, holidays) !== -1) {

		// If yes, then closed

		jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");

	} else {

		// If no, then check for the days of the week


		// Output Sunday
		if ( weekday === 0	) {

			if (timeNow > openingTimeSunday && timeNow < closingTimeSunday) {

				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourSunday + ":" + closingMinutesSunday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Monday
		if ( weekday === 1	) {

			if (timeNow > openingTimeMonday && timeNow < closingTimeMonday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourMonday + ":" + closingMinutesMonday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Tuesday
		if ( weekday === 2	) {

			if (timeNow > openingTimeTuesday && timeNow < closingTimeTuesday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourTuesday + ":" + closingMinutesTuesday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Wednesday
		if ( weekday === 3	) {

			if (timeNow > openingTimeWednesday && timeNow < closingTimeWednesday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourWednesday + ":" + closingMinutesWednesday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Thursday
		if ( weekday === 4	) {

			if (timeNow > openingTimeThursday && timeNow < closingTimeThursday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourThursday + ":" + closingMinutesThursday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Friday
		if ( weekday === 5	) {

			if (timeNow > openingTimeFriday && timeNow < closingTimeFriday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourFriday + ":" + closingMinutesFriday + "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

		// Output Saturday
		if ( weekday === 6	) {

			if (timeNow > openingTimeSaturday && timeNow < closingTimeSaturday) {
				jQuery("<br/><span style='color: green;'><span style='font-weight: bold;'>Now open</span> • Closes at " +  closingHourSaturday + ":" + closingMinutesSaturday +  "</span>").appendTo(".opening-hours .table-headline");
			} else {
				jQuery("<br/><span style='color: red;'>Now closed</span>").appendTo(".opening-hours .table-headline");
			}
		}

	}

});
