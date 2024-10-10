export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getAge' : IDL.Func([], [IDL.Nat], ['query']),
    'getFullInfo' : IDL.Func([], [IDL.Text], ['query']),
    'getHobbies' : IDL.Func([], [IDL.Vec(IDL.Text)], ['query']),
    'getName' : IDL.Func([], [IDL.Text], ['query']),
    'getOccupation' : IDL.Func([], [IDL.Text], ['query']),
  });
};
export const init = ({ IDL }) => { return []; };
