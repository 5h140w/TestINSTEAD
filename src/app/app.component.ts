import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ListItem } from './list/list.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  public rulesTitle: string =
    'The goal is not only to create a working example but well written code:';

  public rules: ListItem[] = [
    {
      lines: ['Create reusable, configurable and performant components'],
    },
    {
      lines: ['Write well typed code'],
    },
    {
      lines: ['Adapt to the existing code-style'],
    },
    {
      lines: ['Comment your code and explain your choices'],
    },
  ];

  public instructionsTitle: string =
    'Given the limited time available, implement in priority order:';

  public instructions: ListItem[] = [
    {
      lines: ['General layout'],
    },
    {
      lines: ['Possibility to rename the Master tag'],
    },
    {
      lines: ['Possibility to add and remove tags'],
    },
    {
      lines: ['Possibility to name the tag to be added'],
    },
    {
      lines: ['Imagine that performances might be a concern'],
    },
    {
      lines: [
        'The +n behaviour when the space is too narrow to show every tags',
        '(Think of all the ways for the available space to change)',
      ],
    },
    {
      lines: ['Now, tags come from a (slow) api'],
    },
  ];
  //Initialize the title of the header//
  Title = 'Some Tags:';

  /*  Initialize a variable called TagList : It's a list of strings that contains some initial strings
      first Tag is the master tag : M Tag
      TagList=["M Tag","Tag n1", "Tag n2"]
  */
  TagList = ['M Tag', 'Tag n1', 'Tag n2'];

  // Initiliaze a variable NewTag that helps us to add a Tag to our list
  newTag = '';

  /* addTag function : a function that allows us to add a new Tag to our TagList (the end of the list) 
     We can't add an empty string to the list 
      
  */
  public addTag(newTag: string) {
    if (newTag.trim().length != 0) this.TagList.push(newTag);
  }

  /*
    RemoveTag : a function that allows us to delete the last tag in the list
    We can't delete the master tag
    we need to make sure that our Taglist contain at least one string (Master)
  */
  public RemoveTag() {
    if (this.TagList.length > 1) {
      this.TagList.pop();
    }
  }
}
