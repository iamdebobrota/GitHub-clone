
const header = ()=>{

return `


<div id="logo">	
	
	<a href='/'>
	<img
	src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.C0It0Y9-HXIu_ieBD9beNwAAAA%26pid%3DApi&f=1"
	alt=""
	srcset=""
	/>
	</a>
	</div>
	<div id="search">
	<input id="search-input" type="text" placeholder="Search Github" />
	</div>
	
	<div id="options">
	<ul id="list">
	<li>Pull Requests</li>
	<li>Issues</li>
	<li>Marketplace</li>
	<li><a href='explore.html'> Explore</a></li>
	</ul>
	</div>
	
	<div id="profile">

	<i class="fa-solid fa-bell"></i>
	<select id="select">
	<option value=" +">+
		<option value="New Repository" >New Repository
		<option value="Import repository">Import repository
		<option value="New gist">New gist
		<option value="New project"> New project

	</select>
	<img
	id="profile-img"
	src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse3.mm.bing.net%2Fth%3Fid%3DOIP.fRjYMjw7_Ymj8eNXiP5JNAHaEK%26pid%3DApi&f=1"
	alt=""
	srcset=""
	/>
	</div>
	`;
};

// export default header;

export {header};