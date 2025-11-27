/*
These are personal recreations of existing projects, developed by Ashraf Morningstar for learning and skill development. Original project concepts remain the intellectual property of their respective creators.
GitHub Profile: https://github.com/AshrafMorningstar
*/

function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}class DragAndDropApp extends React.Component {constructor(...args) {super(...args);_defineProperty(this, "state",
    {
      tasks: [
      {
        name: "Add More Tasks",
        category: "todo" }] });_defineProperty(this, "onDragOver",




    ev => {
      ev.preventDefault();
    });_defineProperty(this, "onDragStart",

    (ev, name) => {
      ev.dataTransfer.setData("id", name);
    });_defineProperty(this, "onDrop",

    (ev, cat) => {
      const id = ev.dataTransfer.getData("id");

      let tasks = this.state.tasks.filter(task => {
        if (task.name == id) {
          task.category = cat;
        }
        return task;
      });
      this.setState({
        ...this.state,
        tasks });

    });_defineProperty(this, "handleKeyPress",

    ev => {
      if (ev.key == "Enter" && ev.target.value != "") {
        this.setState({
          tasks: [
          ...this.state.tasks,
          { name: ev.target.value, category: "todo" }] });


        ev.target.value = " ";
      }
    });}

  render() {
    var tasks = {
      todo: [],
      working: [],
      complete: [],
      trash: [] };


    this.state.tasks.forEach(t => {
      tasks[t.category].push( /*#__PURE__*/
      React.createElement("div", {
        className: "item-container",
        key: t.name,
        draggable: true,
        onDragStart: e => this.onDragStart(e, t.name) },

      t.name));


    });



    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement("div", { id: "background-image" }), /*#__PURE__*/
      React.createElement("div", { class: "container" }, /*#__PURE__*/
      React.createElement("div", {
        className: "drop-area",
        onDragOver: e => this.onDragOver(e),
        onDrop: e => this.onDrop(e, "todo") }, /*#__PURE__*/

      React.createElement("h1", null, "Todo"),
      tasks.todo), /*#__PURE__*/

      React.createElement("div", {
        className: "drop-area",
        onDragOver: e => this.onDragOver(e),
        onDrop: e => this.onDrop(e, "working") }, /*#__PURE__*/

      React.createElement("h1", null, "Working"),
      tasks.working), /*#__PURE__*/

      React.createElement("div", {
        className: "drop-area",
        onDragOver: e => this.onDragOver(e),
        onDrop: e => this.onDrop(e, "complete") }, /*#__PURE__*/

      React.createElement("h1", null, "Complete"),
      tasks.complete)), /*#__PURE__*/


      React.createElement("div", null, /*#__PURE__*/
      React.createElement("input", {
        onKeyPress: e => this.handleKeyPress(e),
        className: "input",
        type: "text",
        placeholder: "Task Name" }), /*#__PURE__*/


      React.createElement("div", {
        class: "trash-drop",
        onDrop: e => this.onDrop(e, "trash"),
        onDragOver: e => this.onDragOver(e) }, "Drop here to remove"))));






  }}


ReactDOM.render( /*#__PURE__*/React.createElement(DragAndDropApp, null), document.getElementById("root"));