import Text "mo:base/Text";
import Principal "mo:base/Principal";

actor WhoAmI {
  public query ({ caller }) func getWhoAmI() : async Text {
    let principal = Principal.toText(caller);
    "Your principal ID is: " # principal
  };
}
