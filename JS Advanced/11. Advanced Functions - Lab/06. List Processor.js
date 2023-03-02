function commandExecution(commandsInput) {
    let executionEngine = commandExecutionEngineBuilder();

    commandsInput.forEach(input => {
        let [command, text] = input.split(' ');
        executionEngine[command](text);
    });

    function commandExecutionEngineBuilder() {
        let list = [];

        return {
            add: x => list.push(x),
            remove: x => list = list.filter(element => element != x),
            print: x => console.log(list.join())
        }
    }
}