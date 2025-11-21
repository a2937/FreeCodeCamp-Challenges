#include <stdio.h>
#include <stdlib.h>

char *transformNote(char* notes, int direction);

char *sharpNotation = {"A", "A#", "B", "C", "C#", "D", "D#", "E", "F","F#", "G", "G#"};
char *flatNotation = {"A", "Bb", "B", "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab"};

int inArray(char* array,char letter);
int  getIndex(char* array,char letter);


int main()
{
    char notes[2] = {"Ab", "Gb"};
    printf(transformNote(notes,2));
    return 0;
}

int inArray(char* array, char letter)
{
    for(int w = 0; w < sizeof(array) ; w++)
    {
        if(array[w] == letter)
        {
            return 1;
        }
    }
    return 0;
}

int getIndex(char* array, char letter)
{
     for(int w = 0; w < sizeof(array) ; w++)
    {
        if(array[w] == letter)
        {
            return w;
        }
    }
    return -1;

}

char* transformNote(char* notes, int direction)
{
    char* newNotes = (int*)malloc(sizeof(notes) * sizeof(char));
    for(int i = 0; i < sizeof(notes); i++)
    {
      if(inArray(sharpNotation,newNotes[i]) )
      {
        int index = getIndex(sharpNotation,notes[i]) + (direction)  ;
        newNotes[i] = (sharpNotation[index % sizeof(sharpNotation)]);
      }
      else
      {
        int index = getIndex(flatNotation,notes[i]) + (direction)  ;
        newNotes[i] = (sharpNotation[index % sizeof(sharpNotation)]);
      }
    }
    return newNotes;

}
