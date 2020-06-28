import * as React from "react";
import '../css/App.css';

const urls = [
    {
        id: 1,
        title: "hello world",
        url: "demo/demo01_helloworld.html",
        direction: 'the first react js page , congratulations!!'
    },
    {id: 2, title: "demo02", url: "demo/demo02.html", direction: 'the react js page with array'},
    {id: 3, title: "Component", url: "demo/demo03_component.html", direction: 'tow styles that create Component'},
    {id: 4, title: "Components", url: "demo/demo04_components.html", direction: ' Component list 、复合组件'},
    {
        id: 5,
        title: "Props Children",
        url: "demo/demo05_props_children.html",
        direction: "Visit Component's children in the Component"
    },
    {id: 6, title: "Props Default", url: "demo/demo06_props_default.html", direction: "Set Component's default value"},
    {id: 7, title: "state datetime", url: "demo/demo07_state.html", direction: "Set Component's state"},
    {id: 8, title: "state click coount", url: "demo/demo07_state_02.html"},
    {id: 9, title: "event", url: "demo/demo08_event.html"},
    {id: 10, title: "event click", url: "demo/demo08_event_click.html"},
    {id: 11, title: "event welcome", url: "demo/demo08_event_welcome.html"},
    {id: 12, title: "event toggle", url: "demo/demo08_event_toggle.html"},
    {id: 13, title: "list", url: "demo/demo09_list.html"},
    {id: 14, title: "list blog", url: "demo/demo09_list_blog.html"},
    {id: 15, title: "api setState", url: "demo/demo10_api_setState.html"},
    {id: 16, title: "api replaceState", url: "demo/demo10_api_replacestate.html"},
    {id: 17, title: "life circle", url: "demo/demo11_lifecircel.html"},
    {id: 18, title: "web request ajax", url: "demo/demo12_ajax.html"},
    {id: 19, title: "web request user list", url: "demo/demo13_userList.html"},
    {id: 20, title: "Form Event", url: "demo/demo14_form_select.html"},
    {id: 21, title: "review demo01-03", url: "review/review_demo01-03.html", direction: "review this study content from demo01 to demo03"},
    {id: 22, title: "review todo", url: "review/review_todo.html", direction: "input string ,and submit to show it"},
    {id: 23, title: "HTML CSS JAVASCRIPT", url: "demo/demo_html.html", direction: "HTML test page"},
    {id: 24, title: "WEB MAIN PAGE ONE", url: "MainPage/web_index.html", direction: "HTML test web page"},
    {id: 25, title: "HTML ELEMENT CENTER FUNCTION", url: "demo/demo_html_element_center.html", direction: "html element&text center function"},
    {id: 26, title: "HTML navigation", url: "demo/demo_html_navigation.html", direction: "html navigation style"},
    {id: 27, title: "HTML Dropdown", url: "demo/demo_html_dropdown.html", direction: "html Dropdown style"},
    {id: 28, title: "HTML navigation Dropdown", url: "demo/demo_html_navigation_dropdown.html", direction: "html navigation Dropdown style"},

    {id: 29, title: "HTML JS hello world ", url: "study_js/demo_js_01.html", direction: "JS HELLO WORLD"},
    {id: 30, title: "HTML JS function ", url: "study_js/demo_js_02_function.html", direction: "JS function"}
]

export default class Main extends React.Component {

    render() {
        return (
            <div className="mainDiv">
                <MainView urlArray={urls}/>
            </div>
        );
    }
}


class MainView extends React.Component {
    render() {

        const allList = this.props.urlArray;
        const arrayLength = allList.length;
        const size = 20;
        const divCount = Math.ceil(arrayLength / size)

        let resultEle = []
        if (divCount <= 1) {
            resultEle.push(<MainViewItemParent array={allList}/>)

        } else {
            for (let i = 0; i < divCount; i++) {
                let start = i * size

                let end;
                if (i === divCount - 1) {
                    end = allList.length
                } else {
                    end = (i + 1) * size
                }

                const currList = allList.slice(start, end)
                resultEle.push(<MainViewItemParent array={currList}/>)
            }
        }
        return resultEle;
    }
}

function MainViewItemParent(props) {
    return (
        <div className="App">
            <header className="App-header">
                {
                    props.array.map((item) => (
                        <MainViewItem url={item.url} title={item.title} direction={item.direction} key={item.id}/>
                    ))
                }
            </header>
        </div>
    );
}

class MainViewItem extends React.Component {
    render() {
        return <div>
            <a href={this.props.url} className="App-link" title={this.props.direction}>{this.props.title}</a><br/>
        </div>;
    }
}