<template>
  <div id="restricted">
    <div class="routing"></div>
    <nav class="navbar has-shadow">
      <div class="navbar-brand">
        <a class="navbar-item">
          <img src="../public/img/icons/msapplication-icon-144x144.png">
        </a>
        <div class="navbar-burger burger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="navbar-menu">
        <div class="navbar-start">
          <div class="navbar-item">
            <small>The Warri Initiative: Connecting developers across continents.</small>
          </div>
        </div>
        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <a class="button is-primary">
                <strong>Sign up</strong>
              </a>
              <a class="button is-light">Log in</a>
            </div>
          </div>
          <div class="navbar-item has-dropdown is-hoverable">
            <div class="navbar-link">User Menu</div>
            <div class="navbar-dropdown">
              <router-link to="/profile" class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon icon="user-circle"/>
                  </span>
                  Profile
                </div>
              </router-link>
              <router-link to="/donate" class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon icon="hand-holding-heart"/>
                  </span>
                  Donate
                </div>
              </router-link>
              <router-link to="/logout" class="navbar-item">
                <div>
                  <span class="icon is-small">
                    <font-awesome-icon icon="sign-out-alt"/>
                  </span>
                  Sign Out
                </div>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </nav>
    <section class="section">
      <div class="columns">
        <div class="column is-4-tablet is-3-desktop is-2-widescreen">
          <aside class="menu">
            <p class="menu-label">Menu</p>
            <ul class="menu-list">
              <li>
                <router-link to="/dashboard">
                  <span class="icon">
                    <font-awesome-icon icon="tachometer-alt"/>
                  </span>
                  Dashboard
                </router-link>
              </li>
              <li>
                <router-link to="/users">
                  <span class="icon">
                    <font-awesome-icon icon="address-book"/>
                  </span>
                  Users
                </router-link>
              </li>
              <li>
                <router-link to="/contributions">
                  <span class="icon">
                    <font-awesome-icon icon="file-invoice-dollar"/>
                  </span>
                  Contributions
                </router-link>
              </li>
            </ul>
          </aside>
        </div>

        <main class="column">
          <transition>
            <router-view/>
          </transition>
        </main>
      </div>
    </section>
  </div>
</template>

<style lang="stylus">
.is-rounded img {
  border-radius: 300000px;
}

figure {
  margin-right: 0.5rem;
}

.is-leveled {
  justify-content: space-between;
}
</style>
