(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    0:
    /*!***************************!*\
      !*** multi ./src/main.ts ***!
      \***************************/

    /*! no static exports found */

    /***/
    function _(module, exports, __webpack_require__) {
      module.exports = __webpack_require__(
      /*! /home/aamna/Desktop/StorageConnect/storageConnect/src/main.ts */
      "zUnb");
      /***/
    },

    /***/
    "2MiI":
    /*!*******************************************************!*\
      !*** ./src/app/components/header/header.component.ts ***!
      \*******************************************************/

    /*! exports provided: HeaderComponent */

    /***/
    function MiI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
        return HeaderComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HeaderComponent = /*#__PURE__*/function () {
        function HeaderComponent() {
          _classCallCheck(this, HeaderComponent);
        }

        _createClass(HeaderComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return HeaderComponent;
      }();

      HeaderComponent.ɵfac = function HeaderComponent_Factory(t) {
        return new (t || HeaderComponent)();
      };

      HeaderComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HeaderComponent,
        selectors: [["app-header"]],
        decls: 16,
        vars: 0,
        consts: [[1, "header-row"], [1, "logoBlock"], ["src", "assets/socials/Logo.svg", "alt", "icon"], [1, "menu"], [1, "menu-items"], [1, "menu-items", "button", "yellow-button"]],
        template: function HeaderComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Storage Connect");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Active Listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Sell your Self Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Free Evaluation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Learn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Contact");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".header-row[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding:20px;\n    position: absolute;\n    top: 0;\n    width: calc(100vw - 40px);\n    color: white;\n}\n.menu[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    color: white;\n}\n.menu-items[_ngcontent-%COMP%]{\n    padding: 5px 10px;\n}\n.logoBlock[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    width: 400px;\n}\n.logoBlock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    padding-left: 10px;\n    text-align: center;\n    padding-top: 7px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw4QkFBOEI7SUFDOUIsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04seUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCIiwiZmlsZSI6ImhlYWRlci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmhlYWRlci1yb3d7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBwYWRkaW5nOjIwcHg7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHRvcDogMDtcbiAgICB3aWR0aDogY2FsYygxMDB2dyAtIDQwcHgpO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cbi5tZW51e1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBjb2xvcjogd2hpdGU7XG59XG4ubWVudS1pdGVtc3tcbiAgICBwYWRkaW5nOiA1cHggMTBweDtcbn1cbi5sb2dvQmxvY2t7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIHdpZHRoOiA0MDBweDtcbn1cbi5sb2dvQmxvY2sgZGl2e1xuICAgIHBhZGRpbmctbGVmdDogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZy10b3A6IDdweDtcbn0iXX0= */", ".yellow-button[_ngcontent-%COMP%]{\n    background-color: #FFBE0B;\n    color: black;\n}\n.white-button[_ngcontent-%COMP%]{\n    background-color: #FFF;    \n    color: black;\n}\n.blue-button[_ngcontent-%COMP%]{\n    background-color: #1849C6;    \n    color: white;\n}\n.yellow-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFF;\n}\n.white-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;    \n}\n.blue-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;\n}\n.button[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    cursor: pointer;\n    padding: 10px;\n    text-align: center;\n    font-size: 13px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n.heading[_ngcontent-%COMP%]{\n    font-size: 55px;\n    font-weight: bold;\n}\n.headingSmall[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 25px;\n    padding-top: 30px;\n}\n.description[_ngcontent-%COMP%]{\n    width: 530px;\n    text-align: center;\n    font-size: 17px;\n    padding-bottom: 50px;\n}\n.banner[_ngcontent-%COMP%]{\n    font-family: 'Poppins';\n    width: 100vw;\n    min-height: 375px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    background-color: white;\n    padding: 25px 0px 50px;\n    align-items: center;\n}\n.blueBanner[_ngcontent-%COMP%]{\n    background-color: #1849C6;\n    color: white;\n}\n.lightBlueBanner[_ngcontent-%COMP%]{\n    background-color: #E8EFFF;\n    color: black;\n    border-bottom-right-radius: 250px;\n}\n.mainBanner[_ngcontent-%COMP%]{\n    background-image: url(\"/../../assets/backgrounds/Item1.png\");\n    background-size: cover;\n    background-position: center;\n    color: white;\n}\n.absoluteTop[_ngcontent-%COMP%]{\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.buttonRow[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width: 450px;\n    padding: 0px 50px;\n}\n.buttonRow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    width: 40%;\n}\n.widgetsBlock[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1140px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 33.33%;\n    margin: 20px;\n    max-width: 300px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1165px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 25%;\n    margin: 20px;\n    max-width: 250px;\n}\n.twoCols[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 0px;\n}\n.droppedImage[_ngcontent-%COMP%]{\n    margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDREQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3ctYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJFMEI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLndoaXRlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyAgICBcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYmx1ZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDlDNjsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnllbGxvdy1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi53aGl0ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjsgICAgXG59XG4uYmx1ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjtcbn1cbi5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGluZ1NtYWxse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgICB3aWR0aDogNTMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5iYW5uZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMzc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibHVlQmFubmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODQ5QzY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmxpZ2h0Qmx1ZUJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRkZGO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUwcHg7XG59XG4ubWFpbkJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzL0l0ZW0xLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWJzb2x1dGVUb3B7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmJ1dHRvblJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xufVxuLmJ1dHRvblJvdyBkaXZ7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLndpZGdldHNCbG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi53aWRnZXRzQmxvY2sgZGl2e1xuICAgIGZsZXg6IDAgMCAzMy4zMyU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogMTE2NXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTQgZGl2e1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi50d29Db2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZHJvcHBlZEltYWdle1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HeaderComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-header',
            templateUrl: './header.component.html',
            styleUrls: ['./header.component.css', '../../home/home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "9vUh":
    /*!****************************************!*\
      !*** ./src/app/home/home.component.ts ***!
      \****************************************/

    /*! exports provided: HomeComponent */

    /***/
    function vUh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
        return HomeComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _mockData_data_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../mockData/data.json */
      "hCC4");

      var _mockData_data_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(
      /*! ../mockData/data.json */
      "hCC4", 1);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _components_widgets_storage_description_widget_storage_description_widget_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../components/widgets/storage-description-widget/storage-description-widget.component */
      "z2Qp");

      function HomeComponent_div_19_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-storage-description-widget", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r3 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storageObject", item_r3);
        }
      }

      function HomeComponent_div_26_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-storage-description-widget", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r4 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storageObject", item_r4);
        }
      }

      function HomeComponent_div_55_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-storage-description-widget", 19);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var item_r5 = ctx.$implicit;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("storageObject", item_r5);
        }
      }

      var HomeComponent = /*#__PURE__*/function () {
        function HomeComponent(http) {
          _classCallCheck(this, HomeComponent);

          this.http = http;
          this.data = [];
          this.fullData = [];
        }

        _createClass(HomeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            // this.http.get('http://localhost:4200/storages').subscribe(data => {
            //   this.fullData = data;
            //   this.data = data;
            // });
            console.log(_mockData_data_json__WEBPACK_IMPORTED_MODULE_1__);
            this.fullData = _mockData_data_json__WEBPACK_IMPORTED_MODULE_1__.storages;
            this.data = _mockData_data_json__WEBPACK_IMPORTED_MODULE_1__.storages;
          }
        }]);

        return HomeComponent;
      }();

      HomeComponent.ɵfac = function HomeComponent_Factory(t) {
        return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
      };

      HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: HomeComponent,
        selectors: [["app-home"]],
        decls: 60,
        vars: 3,
        consts: [[1, "homePage"], [1, "banner", "mainBanner", 2, "padding", "175px 0px 100px"], [1, "heading", 2, "margin-top", "20px"], [1, "heading", 2, "margin-top", "-20px"], [1, "description"], [1, "buttonRow"], [1, "button", "yellow-button"], [1, "button", "white-button"], [1, "banner"], [1, "headingSmall"], [1, "widgetsBlock"], [4, "ngFor", "ngForOf"], [1, "banner", "blueBanner"], [1, "banner", "lightBlueBanner", "twoCols"], ["src", "/../../assets/people/lady.png", 1, "droppedImage"], [1, "button", "blue-button"], [1, "banner", "twoCols"], [1, "banner", "blueBanner", 2, "border-top-left-radius", "250px"], [1, "widgetsBlockSize4"], [3, "storageObject"]],
        template: function HomeComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Self Storage Business");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Buy. Sell. Learn.");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit sagittis, aliquam non tortor blandit lobortis. blandit ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Sell Your Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Active Self Storage Listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Featured Self Storages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, HomeComponent_div_19_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Active Listings Self Storages");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, HomeComponent_div_26_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View More Listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 13);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Do you have a Self Storage for Sale?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Sell Your Self Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 16);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Do you have a Self Storage for Sale?");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, " Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc tortor sapien sagittis maecenas tincidunt. Quis pretium ornare ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 15);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "Sell Your Self Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "img", 14);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 17);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Learn Everything About Buying, Selling, and Operating a Self Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, " Learn about literally anything to know about Selling or Buying a Self Storage ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 18);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, HomeComponent_div_55_Template, 2, 1, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Explore the Learning Section");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "app-header");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "app-footer");
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.slice(0, 3));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.slice(0, 6));

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](29);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.data.slice(0, 4));
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_widgets_storage_description_widget_storage_description_widget_component__WEBPACK_IMPORTED_MODULE_6__["StorageDescriptionWidgetComponent"]],
        styles: [".yellow-button[_ngcontent-%COMP%]{\n    background-color: #FFBE0B;\n    color: black;\n}\n.white-button[_ngcontent-%COMP%]{\n    background-color: #FFF;    \n    color: black;\n}\n.blue-button[_ngcontent-%COMP%]{\n    background-color: #1849C6;    \n    color: white;\n}\n.yellow-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFF;\n}\n.white-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;    \n}\n.blue-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;\n}\n.button[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    cursor: pointer;\n    padding: 10px;\n    text-align: center;\n    font-size: 13px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n.heading[_ngcontent-%COMP%]{\n    font-size: 55px;\n    font-weight: bold;\n}\n.headingSmall[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 25px;\n    padding-top: 30px;\n}\n.description[_ngcontent-%COMP%]{\n    width: 530px;\n    text-align: center;\n    font-size: 17px;\n    padding-bottom: 50px;\n}\n.banner[_ngcontent-%COMP%]{\n    font-family: 'Poppins';\n    width: 100vw;\n    min-height: 375px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    background-color: white;\n    padding: 25px 0px 50px;\n    align-items: center;\n}\n.blueBanner[_ngcontent-%COMP%]{\n    background-color: #1849C6;\n    color: white;\n}\n.lightBlueBanner[_ngcontent-%COMP%]{\n    background-color: #E8EFFF;\n    color: black;\n    border-bottom-right-radius: 250px;\n}\n.mainBanner[_ngcontent-%COMP%]{\n    background-image: url(\"/../../assets/backgrounds/Item1.png\");\n    background-size: cover;\n    background-position: center;\n    color: white;\n}\n.absoluteTop[_ngcontent-%COMP%]{\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.buttonRow[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width: 450px;\n    padding: 0px 50px;\n}\n.buttonRow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    width: 40%;\n}\n.widgetsBlock[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1140px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 33.33%;\n    margin: 20px;\n    max-width: 300px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1165px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 25%;\n    margin: 20px;\n    max-width: 250px;\n}\n.twoCols[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 0px;\n}\n.droppedImage[_ngcontent-%COMP%]{\n    margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDREQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3ctYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJFMEI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLndoaXRlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyAgICBcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYmx1ZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDlDNjsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnllbGxvdy1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi53aGl0ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjsgICAgXG59XG4uYmx1ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjtcbn1cbi5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGluZ1NtYWxse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgICB3aWR0aDogNTMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5iYW5uZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMzc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibHVlQmFubmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODQ5QzY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmxpZ2h0Qmx1ZUJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRkZGO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUwcHg7XG59XG4ubWFpbkJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzL0l0ZW0xLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWJzb2x1dGVUb3B7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmJ1dHRvblJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xufVxuLmJ1dHRvblJvdyBkaXZ7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLndpZGdldHNCbG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi53aWRnZXRzQmxvY2sgZGl2e1xuICAgIGZsZXg6IDAgMCAzMy4zMyU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogMTE2NXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTQgZGl2e1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi50d29Db2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZHJvcHBlZEltYWdle1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-home',
            templateUrl: './home.component.html',
            styleUrls: ['./home.component.css']
          }]
        }], function () {
          return [{
            type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
          }];
        }, null);
      })();
      /***/

    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    "LmEr":
    /*!*******************************************************!*\
      !*** ./src/app/components/footer/footer.component.ts ***!
      \*******************************************************/

    /*! exports provided: FooterComponent */

    /***/
    function LmEr(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
        return FooterComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var FooterComponent = /*#__PURE__*/function () {
        function FooterComponent() {
          _classCallCheck(this, FooterComponent);
        }

        _createClass(FooterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {}
        }]);

        return FooterComponent;
      }();

      FooterComponent.ɵfac = function FooterComponent_Factory(t) {
        return new (t || FooterComponent)();
      };

      FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: FooterComponent,
        selectors: [["app-footer"]],
        decls: 38,
        vars: 0,
        consts: [[1, "footer-row"], [1, "block", "largeBlock"], [1, "footerHeading"], [1, "block"], [1, "boldCaps"], [1, "button", "blue-button"], [1, "block", 2, "justify-content", "flex-start"], [1, "socialGroup"], [1, "icon"], ["src", "../../../assets/socials/facebook.svg", "alt", "icon"], ["src", "../../../assets/socials/linkedIn.svg", "alt", "icon"], ["src", "../../../assets/socials/twitter.svg", "alt", "icon"], ["src", "../../../assets/socials/insta.svg", "alt", "icon"]],
        template: function FooterComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " StorageConnect ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Nam posuere accumsan porta. Integer id orci sed ante tincidunt tincidunt sit amet sed libero. ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " \xA9 StorageConnect 2022, All Rights Reserved ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Quick Links");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Active Listings");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Self your Self Storage");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Free Evaluation");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Learn");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Newletter");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Get latest updates right in your inbox");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Subscribe Now");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "Let's get Social");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](31, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](33, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "img", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "img", 12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }
        },
        styles: [".footer-row[_ngcontent-%COMP%]{\n    left: 0;\n    right: 0;\n    width: calc(100% - 40px);\n    height: 150px;\n    bottom: 0;\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    padding: 70px 20px; \n    font-family: 'Poppins';\n    flex-wrap: wrap;\n}\n.block[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    width: 15%;\n    height: 100%;\n    font-size: 13px;\n    min-width: 180px\n}\n.largeBlock[_ngcontent-%COMP%]{\n    width: 35%;\n}\n.boldCaps[_ngcontent-%COMP%]{\n    font-weight: bold;\n    text-transform: uppercase;\n}\n.footerHeading[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 15px;\n}\n.socialGroup[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    padding-top: 20px;\n}\n.icon[_ngcontent-%COMP%]{\n    background-color: #1849C6;\n    width: 20px;\n    height: 20px;\n    border-radius: 100%;\n    text-align: center;\n    padding: 10px;\n    color: white;\n}\n.icon[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksT0FBTztJQUNQLFFBQVE7SUFDUix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLFNBQVM7SUFDVCxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLDZCQUE2QjtJQUM3QixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtJQUNmO0FBQ0o7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsOEJBQThCO0lBQzlCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxZQUFZO0lBQ1osbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsWUFBWTtBQUNoQiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXItcm93e1xuICAgIGxlZnQ6IDA7XG4gICAgcmlnaHQ6IDA7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgIGhlaWdodDogMTUwcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgICBwYWRkaW5nOiA3MHB4IDIwcHg7IFxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucyc7XG4gICAgZmxleC13cmFwOiB3cmFwO1xufVxuLmJsb2Nre1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgd2lkdGg6IDE1JTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIG1pbi13aWR0aDogMTgwcHhcbn1cbi5sYXJnZUJsb2Nre1xuICAgIHdpZHRoOiAzNSU7XG59XG4uYm9sZENhcHN7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cbi5mb290ZXJIZWFkaW5ne1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMTVweDtcbn1cbi5zb2NpYWxHcm91cHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgIHBhZGRpbmctdG9wOiAyMHB4O1xufVxuLmljb257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDlDNjtcbiAgICB3aWR0aDogMjBweDtcbiAgICBoZWlnaHQ6IDIwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTAwJTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uaWNvbjpob3ZlcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZCRTBCO1xufVxuLmljb24gaW1ne1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn0iXX0= */", ".yellow-button[_ngcontent-%COMP%]{\n    background-color: #FFBE0B;\n    color: black;\n}\n.white-button[_ngcontent-%COMP%]{\n    background-color: #FFF;    \n    color: black;\n}\n.blue-button[_ngcontent-%COMP%]{\n    background-color: #1849C6;    \n    color: white;\n}\n.yellow-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFF;\n}\n.white-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;    \n}\n.blue-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;\n}\n.button[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    cursor: pointer;\n    padding: 10px;\n    text-align: center;\n    font-size: 13px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n}\n.heading[_ngcontent-%COMP%]{\n    font-size: 55px;\n    font-weight: bold;\n}\n.headingSmall[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 25px;\n    padding-top: 30px;\n}\n.description[_ngcontent-%COMP%]{\n    width: 530px;\n    text-align: center;\n    font-size: 17px;\n    padding-bottom: 50px;\n}\n.banner[_ngcontent-%COMP%]{\n    font-family: 'Poppins';\n    width: 100vw;\n    min-height: 375px;\n    display: flex;\n    flex-direction: column;\n    justify-content: space-around;\n    background-color: white;\n    padding: 25px 0px 50px;\n    align-items: center;\n}\n.blueBanner[_ngcontent-%COMP%]{\n    background-color: #1849C6;\n    color: white;\n}\n.lightBlueBanner[_ngcontent-%COMP%]{\n    background-color: #E8EFFF;\n    color: black;\n    border-bottom-right-radius: 250px;\n}\n.mainBanner[_ngcontent-%COMP%]{\n    background-image: url(\"/../../assets/backgrounds/Item1.png\");\n    background-size: cover;\n    background-position: center;\n    color: white;\n}\n.absoluteTop[_ngcontent-%COMP%]{\n    position: relative;\n    top: 0;\n    left: 0;\n    right: 0;\n}\n.buttonRow[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    justify-content: space-around;\n    width: 450px;\n    padding: 0px 50px;\n}\n.buttonRow[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    width: 40%;\n}\n.widgetsBlock[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1140px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlock[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 33.33%;\n    margin: 20px;\n    max-width: 300px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    max-width: 1165px;\n    flex-wrap: wrap;\n    justify-content: center;\n    color: black;\n    padding-bottom: 40px;\n}\n.widgetsBlockSize4[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    flex: 0 0 25%;\n    margin: 20px;\n    max-width: 250px;\n}\n.twoCols[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    padding-bottom: 0px;\n}\n.droppedImage[_ngcontent-%COMP%]{\n    margin-bottom: -10px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsMkJBQW1CO0lBQW5CLHdCQUFtQjtJQUFuQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLHNCQUFzQjtJQUN0QixZQUFZO0lBQ1osaUJBQWlCO0lBQ2pCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsNkJBQTZCO0lBQzdCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixpQ0FBaUM7QUFDckM7QUFDQTtJQUNJLDREQUE0RDtJQUM1RCxzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFlBQVk7QUFDaEI7QUFDQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztJQUNQLFFBQVE7QUFDWjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtJQUNuQiw2QkFBNkI7SUFDN0IsWUFBWTtJQUNaLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksVUFBVTtBQUNkO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixvQkFBb0I7QUFDeEI7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osZ0JBQWdCO0FBQ3BCO0FBRUE7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLG1CQUFtQjtBQUN2QjtBQUVBO0lBQ0ksb0JBQW9CO0FBQ3hCIiwiZmlsZSI6ImhvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi55ZWxsb3ctYnV0dG9ue1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkJFMEI7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuLndoaXRlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGOyAgICBcbiAgICBjb2xvcjogYmxhY2s7XG59XG4uYmx1ZS1idXR0b257XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE4NDlDNjsgICAgXG4gICAgY29sb3I6IHdoaXRlO1xufVxuLnllbGxvdy1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjtcbn1cbi53aGl0ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjsgICAgXG59XG4uYmx1ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjtcbn1cbi5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG59XG4uaGVhZGluZ3tcbiAgICBmb250LXNpemU6IDU1cHg7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4uaGVhZGluZ1NtYWxse1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjVweDtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbn1cbi5kZXNjcmlwdGlvbntcbiAgICB3aWR0aDogNTMwcHg7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGZvbnQtc2l6ZTogMTdweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNTBweDtcbn1cbi5iYW5uZXJ7XG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJztcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgbWluLWhlaWdodDogMzc1cHg7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xuICAgIHBhZGRpbmc6IDI1cHggMHB4IDUwcHg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ibHVlQmFubmVye1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxODQ5QzY7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuLmxpZ2h0Qmx1ZUJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRThFRkZGO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMjUwcHg7XG59XG4ubWFpbkJhbm5lcntcbiAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIvLi4vLi4vYXNzZXRzL2JhY2tncm91bmRzL0l0ZW0xLnBuZ1wiKTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYWJzb2x1dGVUb3B7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHJpZ2h0OiAwO1xufVxuLmJ1dHRvblJvd3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gICAgd2lkdGg6IDQ1MHB4O1xuICAgIHBhZGRpbmc6IDBweCA1MHB4O1xufVxuLmJ1dHRvblJvdyBkaXZ7XG4gICAgd2lkdGg6IDQwJTtcbn1cblxuLndpZGdldHNCbG9ja3tcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gICAgbWF4LXdpZHRoOiAxMTQwcHg7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbn1cbi53aWRnZXRzQmxvY2sgZGl2e1xuICAgIGZsZXg6IDAgMCAzMy4zMyU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMzAwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTR7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgIG1heC13aWR0aDogMTE2NXB4O1xuICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgcGFkZGluZy1ib3R0b206IDQwcHg7XG59XG4ud2lkZ2V0c0Jsb2NrU2l6ZTQgZGl2e1xuICAgIGZsZXg6IDAgMCAyNSU7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIG1heC13aWR0aDogMjUwcHg7XG59XG5cbi50d29Db2xze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBwYWRkaW5nLWJvdHRvbTogMHB4O1xufVxuXG4uZHJvcHBlZEltYWdle1xuICAgIG1hcmdpbi1ib3R0b206IC0xMHB4O1xufSJdfQ== */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-footer',
            templateUrl: './footer.component.html',
            styleUrls: ['./footer.component.css', '../../home/home.component.css']
          }]
        }], function () {
          return [];
        }, null);
      })();
      /***/

    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");

      var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
        _classCallCheck(this, AppComponent);

        this.title = 'Storage Connect';
      });

      AppComponent.ɵfac = function AppComponent_Factory(t) {
        return new (t || AppComponent)();
      };

      AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: AppComponent,
        selectors: [["app-root"]],
        decls: 1,
        vars: 0,
        template: function AppComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-home");
          }
        },
        directives: [_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"]],
        styles: ["h1[_ngcontent-%COMP%]{\n    color: #369;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 250%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksV0FBVztJQUNYLHlDQUF5QztJQUN6QyxlQUFlO0FBQ25CIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDF7XG4gICAgY29sb3I6ICMzNjk7XG4gICAgZm9udC1mYW1pbHk6IEFyaWFsLCBIZWx2ZXRpY2EsIHNhbnMtc2VyaWY7XG4gICAgZm9udC1zaXplOiAyNTAlO1xufVxuIl19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-root',
            templateUrl: './app.component.html',
            styleUrls: ['./app.component.css']
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./home/home.component */
      "9vUh");
      /* harmony import */


      var _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/header/header.component */
      "2MiI");
      /* harmony import */


      var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/footer/footer.component */
      "LmEr");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _components_widgets_storage_description_widget_storage_description_widget_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/widgets/storage-description-widget/storage-description-widget.component */
      "z2Qp");

      var AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
        type: AppModule,
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
      });
      AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
        factory: function AppModule_Factory(t) {
          return new (t || AppModule)();
        },
        providers: [],
        imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]]
      });

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_widgets_storage_description_widget_storage_description_widget_component__WEBPACK_IMPORTED_MODULE_7__["StorageDescriptionWidgetComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]]
        });
      })();
      /*@__PURE__*/


      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
          args: [{
            declarations: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _components_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"], _components_widgets_storage_description_widget_storage_description_widget_component__WEBPACK_IMPORTED_MODULE_7__["StorageDescriptionWidgetComponent"]],
            imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
          }]
        }], null, null);
      })();
      /***/

    },

    /***/
    "hCC4":
    /*!************************************!*\
      !*** ./src/app/mockData/data.json ***!
      \************************************/

    /*! exports provided: storages, default */

    /***/
    function hCC4(module) {
      module.exports = JSON.parse("{\"storages\":[{\"title\":\"\",\"location\":\"Jersey City, NJ\",\"units\":\"89\",\"occupancy\":\"63\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image1.png\"},{\"title\":\"Heading of this Self Storage\",\"location\":\"Jersey City, NJ\",\"units\":\"103\",\"occupancy\":\"76\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image2.png\"},{\"title\":\"Heading\",\"location\":\"Jersey City, NJ\",\"units\":\"16\",\"occupancy\":\"88\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image3.png\"},{\"title\":\"Self Storage\",\"location\":\"Jersey City, NJ\",\"units\":\"34\",\"occupancy\":\"67\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image4.png\"},{\"title\":\"This Self Storage\",\"location\":\"Jersey City, NJ\",\"units\":\"58\",\"occupancy\":\"71\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image5.png\"},{\"title\":\"Heading of this\",\"location\":\"Jersey City, NJ\",\"units\":\"43\",\"occupancy\":\"52\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image6.png\"},{\"title\":\"Heading of this Self Storage\",\"location\":\"Jersey City, NJ\",\"units\":\"112\",\"occupancy\":\"50\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image7.png\"},{\"title\":\"Heading\",\"location\":\"Jersey City, NJ\",\"units\":\"72\",\"occupancy\":\"13\",\"size\":\"40233\",\"image\":\"/../../../../assets/storages/image8.png\"}]}");
      /***/
    },

    /***/
    "z2Qp":
    /*!*******************************************************************************************************!*\
      !*** ./src/app/components/widgets/storage-description-widget/storage-description-widget.component.ts ***!
      \*******************************************************************************************************/

    /*! exports provided: StorageDescriptionWidgetComponent */

    /***/
    function z2Qp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "StorageDescriptionWidgetComponent", function () {
        return StorageDescriptionWidgetComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");

      function StorageDescriptionWidgetComponent_div_2_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r0.storageObject.title, " ");
        }
      }

      var _c0 = function _c0(a0) {
        return {
          "widgetHeading": a0
        };
      };

      function StorageDescriptionWidgetComponent_div_3_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](2, _c0, ctx_r1.makeLocationHeading));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.storageObject.location);
        }
      }

      function StorageDescriptionWidgetComponent_div_5_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r2.storageObject.location);
        }
      }

      var StorageDescriptionWidgetComponent = /*#__PURE__*/function () {
        function StorageDescriptionWidgetComponent() {
          _classCallCheck(this, StorageDescriptionWidgetComponent);

          this.makeLocationHeading = false;
        }

        _createClass(StorageDescriptionWidgetComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (this.storageObject.title == "") {
              this.makeLocationHeading = true;
            }
          }
        }]);

        return StorageDescriptionWidgetComponent;
      }();

      StorageDescriptionWidgetComponent.ɵfac = function StorageDescriptionWidgetComponent_Factory(t) {
        return new (t || StorageDescriptionWidgetComponent)();
      };

      StorageDescriptionWidgetComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
        type: StorageDescriptionWidgetComponent,
        selectors: [["app-storage-description-widget"]],
        inputs: {
          storageObject: "storageObject"
        },
        decls: 29,
        vars: 7,
        consts: [[1, "widgetBg"], [3, "src"], ["class", "widgetHeading", 4, "ngIf"], ["class", "iconDesc", 3, "ngClass", 4, "ngIf"], [1, "widgetDetails"], ["class", "iconDesc", 4, "ngIf"], [1, "iconDesc"], [1, "icon"], ["src", "../../../assets/icons/units.svg", "alt", "icon"], ["src", "../../../assets/icons/size.svg", "alt", "icon"], ["src", "../../../assets/icons/occupancy.svg", "alt", "icon"], [1, "button", "blue-button"], [1, "widgetHeading"], [1, "iconDesc", 3, "ngClass"], ["src", "../../../assets/icons/location.svg", "alt", "icon"]],
        template: function StorageDescriptionWidgetComponent_Template(rf, ctx) {
          if (rf & 1) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "img", 1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, StorageDescriptionWidgetComponent_div_2_Template, 2, 1, "div", 2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, StorageDescriptionWidgetComponent_div_3_Template, 5, 4, "div", 3);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, StorageDescriptionWidgetComponent_div_5_Template, 5, 1, "div", 5);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 8);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Total Unit: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "img", 9);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Size: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 6);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "img", 10);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Occupancy: ");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, "View More Details");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
          }

          if (rf & 2) {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate"]("src", ctx.storageObject.image, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeUrl"]);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.makeLocationHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.makeLocationHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.makeLocationHeading);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.storageObject.units);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.storageObject.size, " Sq Ft");

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx.storageObject.occupancy, "%");
          }
        },
        directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"]],
        styles: [".widgetBg[_ngcontent-%COMP%]{\n    background-color: #F6F8FD;\n    padding: 10px;\n    border-radius: 10px;\n    flex: 30%;\n}\n.widgetBg[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    max-width: 100%;\n    height: auto;\n    border-radius: 8px;\n    display: block;\n    margin-left: auto;\n    margin-right: auto;\n}\n.widgetDetails[_ngcontent-%COMP%]{\n    display: flex;\n    flex-direction: row;\n    flex-wrap: wrap;\n    font-size: 12px;\n}\n.widgetDetails[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{\n    width: 50%;\n    padding: 2px 0;\n}\n.widgetHeading[_ngcontent-%COMP%]{\n    font-weight: bold;\n    font-size: 20px;\n    padding: 10px 0;\n}\n.blue-button[_ngcontent-%COMP%]{\n    background-color: #1849C6;    \n    color: white;\n}\n.blue-button[_ngcontent-%COMP%]:hover{\n    background-color: #FFBE0B;\n}\n.button[_ngcontent-%COMP%]{\n    border-radius: 10px;\n    cursor: pointer;\n    padding: 10px;\n    text-align: center;\n    font-size: 13px;\n    height: -webkit-fit-content;\n    height: -moz-fit-content;\n    height: fit-content;\n    width: 200px;\n    margin: 10px auto;\n}\n.iconDesc[_ngcontent-%COMP%]{\n    display: inline-flex;\n    padding-bottom: 5px !important;\n}\n.icon[_ngcontent-%COMP%]{\n    width: 15px;\n    height: 15px;\n    text-align: center;\n    padding: 1px 3px;\n}\n.icon[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\n    width: 100%;\n    height: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInN0b3JhZ2UtZGVzY3JpcHRpb24td2lkZ2V0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7SUFDekIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7SUFDZixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsbUJBQW1CO0lBQ25CLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztBQUNsQjtBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixlQUFlO0FBQ25CO0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtBQUNoQjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLDJCQUFtQjtJQUFuQix3QkFBbUI7SUFBbkIsbUJBQW1CO0lBQ25CLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLG9CQUFvQjtJQUNwQiw4QkFBOEI7QUFDbEM7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEIiLCJmaWxlIjoic3RvcmFnZS1kZXNjcmlwdGlvbi13aWRnZXQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi53aWRnZXRCZ3tcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjZGOEZEO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmbGV4OiAzMCU7XG59XG4ud2lkZ2V0QmcgaW1ne1xuICAgIG1heC13aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IGF1dG87XG4gICAgYm9yZGVyLXJhZGl1czogOHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbn1cbi53aWRnZXREZXRhaWxze1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgZm9udC1zaXplOiAxMnB4O1xufVxuLndpZGdldERldGFpbHMgZGl2e1xuICAgIHdpZHRoOiA1MCU7XG4gICAgcGFkZGluZzogMnB4IDA7XG59XG5cbi53aWRnZXRIZWFkaW5ne1xuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBwYWRkaW5nOiAxMHB4IDA7XG59XG5cbi5ibHVlLWJ1dHRvbntcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTg0OUM2OyAgICBcbiAgICBjb2xvcjogd2hpdGU7XG59XG4uYmx1ZS1idXR0b246aG92ZXJ7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGQkUwQjtcbn1cbi5idXR0b257XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgZm9udC1zaXplOiAxM3B4O1xuICAgIGhlaWdodDogZml0LWNvbnRlbnQ7XG4gICAgd2lkdGg6IDIwMHB4O1xuICAgIG1hcmdpbjogMTBweCBhdXRvO1xufVxuLmljb25EZXNje1xuICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgIHBhZGRpbmctYm90dG9tOiA1cHggIWltcG9ydGFudDtcbn1cbi5pY29ue1xuICAgIHdpZHRoOiAxNXB4O1xuICAgIGhlaWdodDogMTVweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgcGFkZGluZzogMXB4IDNweDtcbn1cbi5pY29uIGltZ3tcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59Il19 */"]
      });
      /*@__PURE__*/

      (function () {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](StorageDescriptionWidgetComponent, [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
          args: [{
            selector: 'app-storage-description-widget',
            templateUrl: './storage-description-widget.component.html',
            styleUrls: ['./storage-description-widget.component.css']
          }]
        }], function () {
          return [];
        }, {
          storageObject: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
          }]
        });
      })();
      /***/

    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/

    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      module.exports = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map