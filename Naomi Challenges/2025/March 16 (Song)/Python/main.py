sharpNotation = ['A', 'A#', 'B', 'C', 'C#', 'D', 'D#', 'E', 'F','F#', 'G', 'G#']
flatNotation = ['A', 'Bb', 'B', 'C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab']

def transformNote(notes,direction):
  newNotes = [] 
  for note in notes:
    if sharpNotation.__contains__(note): 
      index = sharpNotation.index(note) + (direction)  
      newNotes.append(sharpNotation[index % sharpNotation.__len__()])
    else:
      index = flatNotation.index(note) + (direction)  
      newNotes.append(sharpNotation[index % sharpNotation.__len__()])
  return newNotes


print(transformNote(['C', 'C', 'C#', 'D', 'F', 'D', 'F', 'D', 'D', 'C#', 'C', 'G', 'C', 'C'],4)); 


