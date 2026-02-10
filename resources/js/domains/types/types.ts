// Remove 'null' value option from a type's property
export type RemoveNull<Type> = {
  [Property in keyof Type] : Exclude<Type[Property], null>;
};

// Remove 'optional' attributes from a type's properties
export type Concrete<Type> = {
  [Property in keyof Type]-?: Type[Property];
}

// Order is important here! First remove 'optional' attribute,
// then remove null option. Otherwise, properties can be undefined 
// OR a type, but NOT optional! 
// Making a concrete type first removes the undefined possibility.
export type NonNullConcrete<Type> = RemoveNull<Concrete<Type>>;