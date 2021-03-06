"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var colors_enum_1 = require('../../../enumerations/colors.enum');
var note_states_enum_1 = require('../../../enumerations/note-states.enum');
var enum_utilities_1 = require('../../../enumerations/utilities/enum.utilities');
var note_model_1 = require("../../../models/note.model");
// TODO extract function
function isNullOrUndefined(obj) {
    return typeof obj === "undefined" || obj === null;
}
// TODO extract consts
var DEFAULT_COLOR_INDEX = colors_enum_1.ColorsEnum.Gray;
var DEFAULT_STATE_INDEX = note_states_enum_1.NoteStatesEnum.Todo;
var NoteComponent = (function () {
    function NoteComponent() {
    }
    NoteComponent.prototype.ngOnInit = function () {
        this.iconsPath = './app/assets/images/icons/';
        this.placeholderImage = this.iconsPath + 'browser-icon-main.png';
        this.stateImageUrl = this.updateStateImageUrl();
        this.noteStatesEnum = note_states_enum_1.NoteStatesEnum;
        this.noteStates = enum_utilities_1.EnumUtils.values(note_states_enum_1.NoteStatesEnum);
        this.notedata.state.index = DEFAULT_STATE_INDEX;
        this.notedata.state.name = this.noteStates[DEFAULT_STATE_INDEX];
        this.colorsEnum = colors_enum_1.ColorsEnum;
        this.noteColors = enum_utilities_1.EnumUtils.values(colors_enum_1.ColorsEnum);
        this.notedata.color = this.noteColors[DEFAULT_COLOR_INDEX];
        this.showMoreOptions = false;
    };
    NoteComponent.prototype.changeColor = function (color) {
        this.notedata.color = color;
    };
    NoteComponent.prototype.onDateChanged = function (ev) {
        console.log(ev);
        this.notedata.expireDate = ev.jsdate;
    };
    NoteComponent.prototype.changeNoteState = function (state) {
        this.notedata.state.index = this.noteStates.indexOf(state);
        this.notedata.state.name = state;
        this.stateImageUrl = this.updateStateImageUrl();
    };
    NoteComponent.prototype.updateStateImageUrl = function () {
        var imageUrlToReturn = this.placeholderImage;
        var currentStateIndex = DEFAULT_STATE_INDEX;
        if (!isNullOrUndefined(this.notedata.state.index)) {
            currentStateIndex = this.notedata.state.index;
        }
        if (currentStateIndex === note_states_enum_1.NoteStatesEnum.Todo) {
            imageUrlToReturn = this.iconsPath + 'note-state-todo.png';
        }
        else if (currentStateIndex === note_states_enum_1.NoteStatesEnum.Done) {
            imageUrlToReturn = this.iconsPath + 'note-state-done.png';
        }
        else if (currentStateIndex === note_states_enum_1.NoteStatesEnum.NotDone) {
            imageUrlToReturn = this.iconsPath + 'note-state-not-done.png';
        }
        return imageUrlToReturn;
    };
    NoteComponent.prototype.toggleEdit = function () {
        if (this.notedata.isInEditMode) {
            this.notedata.isInEditMode = false;
            console.log('note is in view mode');
        }
        else {
            this.notedata.isInEditMode = true;
            console.log('note is in edit mode!!');
        }
        this.notedata.areUnsavedChanges = true;
    };
    NoteComponent.prototype.toggleDelete = function () {
        if (this.notedata.isDeleted) {
            this.notedata.isDeleted = false;
            console.log('delete cancel!');
        }
        else {
            this.notedata.isDeleted = true;
            console.log('note is deleted!');
        }
        this.notedata.areUnsavedChanges = true;
    };
    NoteComponent.prototype.toggleShowMoreOptions = function () {
        if (this.showMoreOptions) {
            this.showMoreOptions = false;
        }
        else {
            this.showMoreOptions = true;
        }
    };
    NoteComponent.prototype.save = function () {
        this.notedata.areUnsavedChanges = false;
        console.log('Note changes saved to database!');
        return undefined;
    };
    NoteComponent.prototype.delete = function () {
        console.log('Note deleted flag set!');
        return undefined;
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', note_model_1.Note)
    ], NoteComponent.prototype, "notedata", void 0);
    NoteComponent = __decorate([
        core_1.Component({
            selector: 'single-note',
            templateUrl: './app/components/main/notes/note.component.html',
            styleUrls: ['./app/components/main/notes/note-component.css', './app/assets/css/hover.css']
        }), 
        __metadata('design:paramtypes', [])
    ], NoteComponent);
    return NoteComponent;
}());
exports.NoteComponent = NoteComponent;
//# sourceMappingURL=note.component.js.map