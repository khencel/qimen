<nav class="mt-2">
    <ul class="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
      <!-- Add icons to the links using the .nav-icon class
           with font-awesome or any other icon font library -->
      <li class="nav-item has-treeview">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Starter Pages
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
              <p>Active Page</p>
            </a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
              <i class="far fa-circle nav-icon"></i>
              <p>Inactive Page</p>
            </a>
          </li>
        </ul>
      </li>
      <li class="nav-item">
        <a href="{{url('monthChart')}}" class="nav-link {{request()->is('monthChart')?'active':''}}">
          <i class="nav-icon fas fa-th"></i>
          <p>
            Generate Month Chart
          </p>
        </a>
      </li>
      <li class="nav-item has-treeview {{request()->is('trigram/*','stem/*','door/*','star/*','deitie/*','summary/*')?'menu-open':''}}">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Qi Men Compedium
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        
        <ul class="nav nav-treeview">
          <li class="nav-item has-treeview {{request()->is('trigram/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('trigram/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Eight Trigrams
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('/trigram/list') }}" class="nav-link {{request()->is('trigram/list','trigram/*')?'active':''}}">
                  <i class="far fa-circle nav-icon"></i>
                  <p>
                    <small>
                      Attributes
                    </small>
                    
                  </p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('stem/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('stem/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                The Ten Stems
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('/stem/list') }}" class="nav-link {{request()->is('stem/list','stem/v/*/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Attribute
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('/stem/formation') }}" class="nav-link {{request()->is('stem/formation','stem/formation-list/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Formations
                    </small>
                    </p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('door/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('door/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                The Eight Doors
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('/door/list') }}" class="nav-link {{request()->is('door/list','door/v/*/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Attribute
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('/door/door/stem') }}" class="nav-link {{request()->is('door/door/stem','door/door/stem/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Door with the Stems
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('/door/palace') }}" class="nav-link {{request()->is('door/palace','door/door/palace/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Formations
                    </small>
                  </p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('star/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('star/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                The Nine Stars
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('/star/list') }}" class="nav-link {{request()->is('star/list','star/v/*/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                        Attribute
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('/star/combo/one') }}" class="nav-link {{request()->is('star/combo/one','star/combo/one/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Combo 1
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('/star/combo/two') }}" class="nav-link {{request()->is('star/combo/two','star/combo/two/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Combo 2
                    </small>
                  </p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('deitie/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('deitie/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                The Eight Deities
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('/deitie/list') }}" class="nav-link {{request()->is('deitie/list','deitie/v/*/*')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Attribute
                    </small>
                  </p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('summary/*')?'menu-open':''}}">
            <a href="#" class="nav-link {{request()->is('summary/*')?'active':''}}">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                Summary of Table
                <i class="right fas fa-angle-left"></i>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="{{ url('summary/stem-auspicious-inauspicious') }}" class="nav-link {{request()->is('summary/stem-auspicious-inauspicious')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Stem and Stem Combination 
                    </small>
                    <br>
                    <small>Auspicious &
                      Inauspicious
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('summary/stem-comb-summary') }}" class="nav-link {{request()->is('summary/stem-comb-summary')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Stem and Stem 
                    </small>
                    <br>
                    <small>
                      Combination Summary Table
                    </small>
                  </p>
                </a>
              </li>
              <li class="nav-item">
                <a href="{{ url('summary/stem-transformation') }}" class="nav-link {{request()->is('summary/stem-transformation')?'active':''}}">
                  <i class="fas fa-share nav-icon"></i>
                  <p>
                    <small>
                      Stem Transformation 
                    </small>
                  </p>
                </a>
              </li>
            </ul>
          </li>

        </ul>
      </li>

      <li class="nav-item has-treeview {{request()->is('chart/*')?'menu-open':''}}">
        <a href="#" class="nav-link {{request()->is('chart/*')?'active':''}}">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>
            Chart Management
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          
          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                <small><p>Hour Chart Management</p></small>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="#" onclick="openNav()" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <small>
                    <p>Yang Structure</p>
                  </small>
                </a>
              </li>
              <li class="nav-item">
                <a href="#" onclick="openNavYin()" class="nav-link">
                  <i class="nav-icon fas fa-tachometer-alt"></i>
                  <small>
                    <p>Yin Structure</p>
                  </small>
                </a>
              </li>
            </ul>
          </li>


          <li class="nav-item has-treeview">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                <small><p>Month Chart Management</p></small>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/chart/list" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Yin One</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/chart/list/four" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Yin Four</p>
                </a>
              </li>
              <li class="nav-item">
                <a href="/chart/list/seven" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Yin Seven</p>
                </a>
              </li>
            </ul>
          </li>

          <li class="nav-item has-treeview {{request()->is('chart/day/*')?'menu-open':''}} {{request()->is('chart/*/day')?'menu-open':''}}">
            <a href="#" class="nav-link">
              <i class="nav-icon fas fa-tachometer-alt"></i>
              <p>
                <small><p>Day Chart Management</p></small>
              </p>
            </a>
            <ul class="nav nav-treeview">
              <li class="nav-item">
                <a href="/chart/day/yang_structure/upper_cycle" class="nav-link">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Yang Structure</p>
                </a>
              </li>

              <li class="nav-item">
                <a href="/chart/day/yin_structure/upper_cycle" class="nav-link {{request()->is('chart/day/yin_structure/*')?'active':''}} {{request()->is('chart/*/day')?'active':''}}">
                  <i class="far fa-circle nav-icon"></i>
                  <p>Yin Structure</p>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </li>

      <li class="nav-item has-treeview">
        <a href="#" class="nav-link">
          <i class="nav-icon fas fa-tachometer-alt"></i>
          <p>
            User Management
            <i class="right fas fa-angle-left"></i>
          </p>
        </a>
        <ul class="nav nav-treeview">
          <li class="nav-item">
            <a href="{{url('user/list?t=qimen')}}" class="nav-link {{request()->is('user/list')?'active':''}}">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Qimen
              </p>
            </a>
          </li>
          <li class="nav-item">
            <a href="{{url('user/list?t=forecast')}}" class="nav-link {{request()->is('user/list')?'active':''}}">
              <i class="nav-icon fas fa-th"></i>
              <p>
                Forecasting
              </p>
            </a>
          </li>
        </ul>
      </li>

      <li class="nav-item">
        <a href="{{url('year-chart')}}" class="nav-link {{request()->is('user/list')?'active':''}}">
          <i class="nav-icon fas fa-th"></i>
          <p>
            Year Chart Management
          </p>
        </a>
      </li>
    </ul>
  </nav>

  