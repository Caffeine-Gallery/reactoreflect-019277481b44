import Nat "mo:base/Nat";

import Text "mo:base/Text";

actor WhoAmI {
  let name : Text = "John Doe";
  let age : Nat = 30;
  let occupation : Text = "Software Developer";
  let hobbies : [Text] = ["Reading", "Hiking", "Coding"];

  public query func getName() : async Text {
    name
  };

  public query func getAge() : async Nat {
    age
  };

  public query func getOccupation() : async Text {
    occupation
  };

  public query func getHobbies() : async [Text] {
    hobbies
  };

  public query func getFullInfo() : async Text {
    let hobbiesText = Text.join(", ", hobbies.vals());
    "Name: " # name # "\nAge: " # Nat.toText(age) # "\nOccupation: " # occupation # "\nHobbies: " # hobbiesText
  };
}
