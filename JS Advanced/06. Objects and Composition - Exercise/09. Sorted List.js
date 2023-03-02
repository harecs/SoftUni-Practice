function createSortedList() {
    let sortedListWithMethods = {
        sortedList: [],
        size: 0,
        add: function(num) {
            this.sortedList.push(num);
            this.sortAndReturnNewSize();
        },
        remove: function(index) {

            if (index >= 0 && index < this.sortedList.length) {
                this.sortedList.splice(index, 1);
                this.sortAndReturnNewSize();
            }
        },
        get: function(index) {
            if (index >= 0 && index < this.sortedList.length) {
                return this.sortedList[index];
            }
        },
        sortAndReturnNewSize: function() {
            this.sortedList.sort((a, b) => a - b);
            this.size = this.sortedList.length;
        }
    };

    return sortedListWithMethods;
}