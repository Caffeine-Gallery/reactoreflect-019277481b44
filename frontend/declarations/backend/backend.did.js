export const idlFactory = ({ IDL }) => {
  return IDL.Service({ 'getWhoAmI' : IDL.Func([], [IDL.Text], ['query']) });
};
export const init = ({ IDL }) => { return []; };
