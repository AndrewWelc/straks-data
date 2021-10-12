<template>
    <div>
        <card title="Calendar">
            <div class="row">
                <div class="col-sm-4">
                    <h2 class="card-title">Added event</h2>
                    <form v-on:submit.prevent>
                        <h6 class="mb-0">Start Date</h6>
                        <div class="row">
                            <div class="col-sm-4">
                                <input type="number" v-model="startDate" required class="form-control mt-3" min="1" max="31" placeholder="Date">
                            </div>
                            <div class="col-sm-4">
                                <input type="number" v-model="startHr"  class="form-control mt-3" placeholder="Hour" min="1" max="24">
                            </div>
                            <div class="col-sm-4">
                                <input type="number" v-model="startMin"  class="form-control mt-3" placeholder="Minute" min="00" max="60">
                            </div>
                        </div>
                        <h6 class="mt-3 mb-0">End Date</h6>
                        <div class="row">
                            <div class="col-sm-4">
                                <input type="number" v-model="endDate" required class="form-control mt-3" :min="startDate" max="31" placeholder="Date">
                            </div>
                            <div class="col-sm-4">
                                <input type="number" v-model="endHr"  class="form-control mt-3" placeholder="Hour" min="1" max="24">
                            </div>
                            <div class="col-sm-4">
                                <input type="number" v-model="endMin"  class="form-control mt-3" placeholder="Minute" min="00" max="60">
                            </div>
                        </div>
                        <input type="text" v-model="eventName" required class="form-control mt-3" placeholder="Event Name">
                        <select v-model="className" class="form-control mt-3" :class="className" required>
                            <option disabled value="">Select background color</option>
                            <option value="bg-success text-white" class="bg-success text-white">Success</option>
                            <option value="bg-info text-white" class="bg-info text-white">Info</option>
                            <option value="bg-primary text-white" class="bg-primary text-white">Primary</option>
                            <option value="bg-warning text-white" class="bg-warning text-white">Warning</option>
                            <option value="bg-danger text-white" class="bg-danger text-white">Danger</option>
                        </select>
                        <button @click="clickTestAddEvent" class="mt-3 btn btn-primary">Add Event</button>
                    </form>
                </div>
                <div class="col-sm-8">
                    <div id="app">
                        <div class="app-description">
                            <h3>{{ message }}</h3>
                            <div class="row">
                                <div class="col-sm-4">
                                    <p>Period UOM:
                                        <select v-model="displayPeriodUom" class="form-control">
                                            <option>month</option>
                                            <option>week</option>
                                            <option>year</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="col-sm-4">
                                    <p>Period Count:
                                        <select v-model="displayPeriodCount" class="form-control">
                                            <option :value="1">1</option>
                                            <option :value="2">2</option>
                                            <option :value="3">3</option>
                                        </select>
                                    </p>
                                </div>
                                <div class="col-sm-4">
                                    <p>Starting day of the week:
                                        <select v-model="startingDayOfWeek" class="form-control">
                                            <option
                                                    v-for="(d, index) in dayNames"
                                                    :value="index"
                                                    :key="index">{{ d }}
                                            </option>
                                        </select>
                                    </p>
                                </div>
                            </div>

                        </div>

                        <calendar-view
                                class="holiday-us-traditional holiday-us-official"
                                :show-date="showDate"
                                @clickDay="onClickDay"
                                @clickEvent="onClickEvent"
                                @setShowDate="setShowDate"
                                :time-format-options="{hour: 'numeric', minute:'2-digit'}"
                                :enable-drag-drop="true"
                                :disable-past="disablePast"
                                :disable-future="disableFuture"
                                :show-event-times="showEventTimes"
                                :display-period-uom="displayPeriodUom"
                                :display-period-count="displayPeriodCount"
                                :starting-day-of-week="startingDayOfWeek"
                                @dropEventOnDate="onDrop"
                                :events="events"/>
                    </div>
                </div>
            </div>
        </card>
        <calendar-range :events="calendarEvents" :selection="calendarSelection" class="new_calendar"></calendar-range>
        <button @click="add" class="btn btn-primary mt-3">Add event</button>
    </div>
</template>
<script>
import {calendarRange} from 'vue-calendar-picker'
import CalendarView from "vue-simple-calendar"
import CalendarMathMixin from "vue-simple-calendar/dist/calendar-math-mixin.js"
import card from './card/card.vue'
require("vue-simple-calendar/dist/static/css/default.css")
require("vue-simple-calendar/dist/static/css/holidays-us.css")

export default {
    name: "calendar",
    data() {
        return {
//            vue-calendar start
            showDate: this.thisMonth(1),
            message: "Click a date or event...",
            alreadyAdded: false,
            startingDayOfWeek: 0,
            disablePast: false,
            disableFuture: false,
            displayPeriodUom: "month",
            displayPeriodCount: 1,
            showEventTimes: true,
            startDate: '',
            startHr: '',
            startMin: '',
            endHr: '',
            endMin: '',
            endDate: '',
            eventName: '',
            className: '',
            events: [
                {
                    id: "e0",
                    startDate: "2018-01-05",
                },
                {
                    id: "e99",
                    startDate: this.thisMonth(15, 18, 30),
                },
                {
                    id: "e1",
                    startDate: this.thisMonth(15),
                    title: "Single-day event with a long title",
                },
                {
                    id: "e2",
                    startDate: this.thisMonth(7, 9, 25),
                    endDate: this.thisMonth(10, 16, 30),
                    title: "Multi-day event with a long title and times",
                },
                {
                    id: "e3",
                    startDate: this.thisMonth(20),
                    title: "My Birthday!",
                    classes: "birthday",
                    url: "https://en.wikipedia.org/wiki/Birthday",
                },
                {
                    id: "e4",
                    startDate: this.thisMonth(5),
                    endDate: this.thisMonth(12),
                    title: "Multi-day event",
                    classes: "bg-success text-white",
                },
                {
                    id: "e5",
                    startDate: this.thisMonth(29),
                    title: "Same day 1",
                },
                {
                    id: "e6",
                    startDate: this.thisMonth(29),
                    title: "Same day 2",
                    classes: "bg-danger text-white",
                },
                {
                    id: "e7",
                    startDate: this.thisMonth(29),
                    title: "Same day 3",
                },
                {
                    id: "e8",
                    startDate: this.thisMonth(29),
                    title: "Same day 4",
                    classes: "bg-primary text-white",
                },
                {
                    id: "e9",
                    startDate: this.thisMonth(29),
                    title: "Same day 5",
                },
                {
                    id: "e10",
                    startDate: this.thisMonth(29),
                    title: "Same day 6",
                    classes: "bg-warning text-white",
                },
                {
                    id: "e11",
                    startDate: this.thisMonth(29),
                    title: "Same day 7",
                }, {
                    id: 'e12',
                    startDate: this.thisMonth(23),
                    endDate: this.thisMonth(24),
                    title: "me add",
                },
            ],
//            vue calendar ends
            calendarEvents: [
                // periods
                { color:'#fd7e14',  start: new Date(2016, 9, 5, 0,0,0,0), end: new Date(2017, 4, 15, 0,0,0,0),eventname:'name' },
                { color:'#20c997', start: new Date(2016, 9, 5, 0,0,0,0), end: new Date(2017, 4, 13, 0,0,0,0) },
                { color: '#66ccff', start: new Date(2017, 4, 8, 12,30, 0,0), end: new Date(2017, 4, 9, 6,30, 0,0) },
                // one-time
                { color:'#faa', start: new Date(2017, 4, 2, 0,0,0,0), end: new Date(2017, 4, 2, 0,0,0,0) },
                { color:'#aaa', start: new Date(2017, 4, 2, 0,0,0,0), end: new Date(2017, 4, 2, 0,0,0,0) },
            ],
            calendarSelection: {
                start: new Date(2017, 4, 2), end: new Date(2017, 4, 7, 12)
            },
        }
    },
    components:{
        calendarRange: calendarRange,
        CalendarView,
        CalendarMathMixin,
        card
    },
    mounted: function() {
    },
    destroyed: function() {
    },
    computed: {
//        vue-calendar
        userLocale() {
            return CalendarMathMixin.methods.getDefaultBrowserLocale
        },
        dayNames() {
            return CalendarMathMixin.methods.getFormattedWeekdayNames(
                this.userLocale,
                "long",
                0
            )
        },
    },
    methods:{
        add: function() {
            this.calendarEvents.push({
                color: '#'+Math.floor(Math.random()*16777215).toString(16),
                start: this.calendarSelection.start,
                end: this.calendarSelection.end
            });
        },
//        vue-calendar
        thisMonth(d, h, m) {
            const t = new Date()
//                console.log( new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0));
            return new Date(t.getFullYear(), t.getMonth(), d, h || 0, m || 0)
        },
        onClickDay(d) {
            this.message = `You clicked: ${d.toLocaleDateString()}`
        },
        onClickEvent(e) {
            this.message = `You clicked: ${e.title}`
        },
        setShowDate(d) {
            this.message = `Changing calendar view to ${d.toLocaleDateString()}`
            this.showDate = d
        },
        onDrop(event, date) {
            this.message = `You dropped ${event.id} on ${date.toLocaleDateString()}`
            // Before handling drag/drop date math, need to convert string dates to
            // local dates and coalesce endDate to startDate.
            const fixedStartDate = CalendarMathMixin.methods.toLocalDate(
                event.startDate
            )
            const fixedEndDate = CalendarMathMixin.methods.toLocalDate(
                event.endDate || fixedStartDate
            )
            // Determine the delta between the old start date and the date chosen,
            // and apply that delta to both the start and end date to move the event.
            const eLength = CalendarMathMixin.methods.dayDiff(fixedStartDate, date)
            event.startDate = CalendarMathMixin.methods.addDays(
                fixedStartDate,
                eLength
            )
            event.endDate = CalendarMathMixin.methods.addDays(fixedEndDate, eLength)
        },
        clickTestAddEvent() {
            if(this.startDate.length!=0 && this.endDate.length!=0 && this.eventName.length!=0 && this.className.length!=0) {
                if (this.alreadyAdded)
                    return
//                this.alreadyAdded = true
                this.events.push({
                    id: "e" + this.events.length - 1,
                    startDate: this.thisMonth(this.startDate, this.startHr, this.startMin),
                    endDate: this.thisMonth(this.endDate, this.endHr, this.endMin),
                    title: this.eventName,
                    classes: this.className
                })
            }
        },
//        vue-calendar ends
    }
}
</script>
<style src="../../assets/css/calendar_custom.css"></style>
