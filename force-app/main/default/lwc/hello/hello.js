import { LightningElement } from 'lwc';

export default class MyFirstLWC extends LightningElement {
    thoughts = '';
    areDetailsVisible = false;
    handleChange(event) {
        this.thoughts = event.target.value;
    }

    handleNewChange(event){
        this.areDetailsVisible = event.target.checked;
    }
}
