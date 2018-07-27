const Grid = ((() => {
    class Card {
        constructor(width, gridItemClass, gridID) {
            this.width = width || 200;
            this.gridID = document.getElementById(gridID || 'warZone');
            this.gridItemClass = document.getElementsByClassName(gridItemClass || 'unit');
            this.gridArray = [];
            this.pushedCards = [];
            this.flag = false;
        }

        setWidth() {
            for (let i = 0; i < this.gridItemClass.length; i++) {
                this.gridItemClass[i].style.position = 'absolute';
                this.gridItemClass[i].style.width = `${this.width}px`;
            }
        }

        pushCardToArray() {
            for (let i = 0; i < this.gridItemClass.length; i++) {
                this.gridArray.push(this.gridItemClass[i]);
            }
            return this.gridArray;
        }

        clearArrayPushCard() {
            this.pushedCards.length = 0;
            this.pushedCards = this.pushCardToArray();
        }

        generateGrid() {
            this.setWidth();
            if (this.flag === false) {
                this.clearArrayPushCard();
            }
            const self = this;

            function calcGrid() {
                const itemsPerRow = Math.floor(self.gridID.offsetWidth / self.gridItemClass[0].offsetWidth);
                if (itemsPerRow > 0) {
                    let splitedArrays = createGroupedArray(self.pushedCards, itemsPerRow);
                    splitedArrays.forEach((el, row) => {
                        el.forEach((element, col) => {
                            element.classList.add(`row_${row}_col_${col}`);
                            element.style.top = `${row * element.offsetHeight}px`;
                            element.style.left = `${col * element.offsetWidth}px`;
                        });
                    });
                    self.gridID.style.height = `${splitedArrays.length * self.gridItemClass[0].offsetHeight - 10}px`;
                }

            }

            calcGrid();
            window.addEventListener("resize", debounce(calcGrid, 200));
        }

        moveFromTo(startIndex, endIndex) {
            this.flag = true;
            const self = this;
            if (modify()) {
                this.pushedCards = modify();
            } else {
                this.pushedCards.length = 0;
                this.pushedCards = this.pushCardToArray();
            }

            function modify() {
                if((!isNaN(startIndex) && (startIndex < self.pushedCards.length && startIndex >= 0)) && (!isNaN(endIndex)) && (endIndex < self.pushedCards.length && endIndex >= 0)){
                    const movedCardFrom = self.pushedCards.splice(startIndex, 1);
                    const movedTo = self.pushedCards.splice(endIndex, 1, movedCardFrom[0]);
                    self.pushedCards.splice(startIndex, 0, movedTo[0]);
                    return self.pushedCards;
                }else{
                    throw new Error('Incorrect Index')
                }
            }

            modify();
            this.generateGrid();
        }
    }

    function debounce(cb, wait) {
        let timeout;
        return function () {
            const context = this;
            const args = arguments;
            const later = () => {
                timeout = null;
                cb.apply(context, args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        }
    }

    function createGroupedArray(arr, elementsInGroup) {
        const groups = [];
        let i;
        for (i = 0; i < arr.length; i += elementsInGroup) {
            groups.push(arr.slice(i, i + elementsInGroup));
        }
        return groups;
    }

    return {
        Card
    }
})());

export default Grid;