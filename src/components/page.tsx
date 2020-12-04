import Nav from './nav';

export default function Page({children}) {
  return (
    <div className="container">
      <Nav />
      {children}
    </div>
  );
}
