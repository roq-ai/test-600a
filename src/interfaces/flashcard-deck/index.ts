import { FlashcardInterface } from 'interfaces/flashcard';
import { OrganizationInterface } from 'interfaces/organization';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface FlashcardDeckInterface {
  id?: string;
  title: string;
  organization_id: string;
  user_id: string;
  created_at?: any;
  updated_at?: any;
  flashcard?: FlashcardInterface[];
  organization?: OrganizationInterface;
  user?: UserInterface;
  _count?: {
    flashcard?: number;
  };
}

export interface FlashcardDeckGetQueryInterface extends GetQueryInterface {
  id?: string;
  title?: string;
  organization_id?: string;
  user_id?: string;
}
