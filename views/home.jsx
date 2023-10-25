const React = require("react");
const Def = require("./default");

function home(html) {
  return (
    <Def>
      <main>
        <h1>HOME</h1>
        <div>
          <img src="/images/chai-fruit-drink.jpg" alt="chai fruit shake"/>
          <div>
            Photo by <a href="https://unsplash.com/@cravethebenefits?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Brenda Godinez</a> on <a href="https://unsplash.com/photos/two-fruit-beverages-on-glass-cups-MsTOg6rhRVk?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
          </div>
        </div>
        <a href="/places">
          <button className="btn-primary">Places Page</button>
        </a>

      </main>
    </Def>
  );
}

module.exports = home;
