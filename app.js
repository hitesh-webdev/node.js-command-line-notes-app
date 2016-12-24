var notes = require('./notes.js');

const yargs = require('yargs');

const argv = yargs
				.command('add','Add a new note',{
					title: {
					describe: 'Title of note',
					demand: true
					},
					body: {
						describe: 'Body of note',
						demand: true
					}
				})
				.command('remove','Remove a note',{
					title: {
						describe: 'Title of note',
						demand: true
					}
				})
				.command('read','Read a note',{
					title: {
						describe: 'Title of note',
						demand: true
					}
				})
				.command('list','List all notes')
				.help()
				.argv;	

var command = argv._[0];


//console.log('Command: ',command);

//console.log('Yargs: ',argv);


if(command === 'add'){
	var note = notes.addNote(argv.title,argv.body);
	if(note){
		console.log("Note Created");
		notes.logNote(note);
	}
	else{
		console.log("Note title taken");
	}
} 
else if(command === 'remove'){
	var noteRemoved = notes.removeNote(argv.title);
	if(noteRemoved){
		console.log("Note Removed");
	}
	else{
		console.log("No such note exists!");
	}
}
else if(command === 'read'){
	var note = notes.getNote(argv.title);
	if(note){
		console.log("Note Found");
		notes.logNote(note);
	}
	else{
		console.log("Note not found.")
	}
}
else if(command === 'list'){
	var allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
}
else{
	console.log("Command not found!");
}