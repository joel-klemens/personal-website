import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type RecipeMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Recipe {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly ingredients: string;
  readonly instructions: string;
  readonly filePath: string;
  readonly like: number;
  readonly owner: string;
  readonly createdAt?: string;
  readonly updatedAt?: string;
  constructor(init: ModelInit<Recipe, RecipeMetaData>);
  static copyOf(source: Recipe, mutator: (draft: MutableModel<Recipe, RecipeMetaData>) => MutableModel<Recipe, RecipeMetaData> | void): Recipe;
}