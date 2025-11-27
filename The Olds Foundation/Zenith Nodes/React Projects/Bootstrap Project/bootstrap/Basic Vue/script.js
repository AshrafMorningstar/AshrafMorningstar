/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

Vue.component('app', {
	template: `
    <div class="container">
        <ul class="nav nav-tabs">
            <li class="active">
                <a href="#app-links" data-toggle="tab">Links</a>
            </li>
            <li>
                <a href="#app-passwords" data-toggle="tab">Passwords</a>
            </li>
            <li>
                <a href="#app-base64" data-toggle="tab">Base64</a>
            </li>
        </ul>

        <div class="tab-content">
            <div class="tab-pane fade in active" id="app-links">
                <app-links>Loading links</app-links>
            </div>

            <div class="tab-pane fade" id="app-passwords">
                <app-passwords>Loading passwords</app-passwords>
            </div>

            <div class="tab-pane fade" id="app-base64">
                <app-base64>Loading base64</app-base64>
            </div>
        </div>
    </div>
  	`
})

Vue.component('app-links', {
	template: `
    div id="link-tree">
		  <link-tree :data="linkList">Loading link tree...<link-tree>
    </div
  	`,
	data: function () {
		return {
			linkList:
			[
				{
					"GroupName": "Group 1",
					"Links": [
						{
							"Name": "Group Link 11",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 12",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 13",
							"Url": "https://www.google.com"
						}
					]
				},
				{
					"GroupName": "Group 2",
					"Links": [
						{
							"Name": "Group Link 21",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 22",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 23",
							"Url": "https://www.google.com"
						}
					]
				},
				{
					"GroupName": "Group 3",
					"Links": [
						{
							"Name": "Group Link 31",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 32",
							"Url": "https://www.google.com"
						},
						{
							"Name": "Group Link 33",
							"Url": "https://www.google.com"
						}
					]
				}
			]
		}
	}
})

Vue.component('link-tree', {
	template: `
    <div class="list-group list-group-root well">
		<div v-if="data != null" v-for="group in data">
			<a :href="getGroupName(group.GroupName, true)" class="list-group-item" data-toggle="collapse">
				<h4>{{ group.GroupName }}</h4>
			</a>
			<div class="list-group collapse" :id="getGroupName(group.GroupName, false)">
				<a v-if="group.Links != null" v-for="link in group.Links" :href="link.Url" target="_blank" class="list-group-item" style="margin-left: 15px">
					{{ link.Name }}
				</a>
			</div>
		</div>
    </div>
  	`,
	props: [ "data" ],
	methods: {
		getGroupName: function (linkName, showHash) {
			var result = linkName.replace(/\s+/g, '');

			if (showHash)
				return "#" + result;
			else
				return result;
		},
	},
})

Vue.component('app-passwords', {
    template: `
    <div>
        {{ password }}
    </div>
    `,
    data: function () {
        return {
            password: "abcde"
     
        }
    },
});

Vue.component('app-base64', {
    template: `
    <div>
        {{ base64 }}
    </div>
    `,
    data: function () {
        return {
            base64: "1234"
     
        }
    },
});

new Vue({
    el: '#app-base64'
})

new Vue({
    el: '#app-passwords'
})

new Vue({
	el: '#link-tree'
})

new Vue({
	el: '#app-links'
})

new Vue({
	el: '#app'
})