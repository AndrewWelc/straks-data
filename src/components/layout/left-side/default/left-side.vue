 <template>
    <!-- Left side column. contains the logo and sidebar -->
    <aside class="left-aside sidebar-offcanvas">
        <!-- sidebar: style can be found in sidebar -->
        <section class="sidebar">
            <div id="menu" role="navigation">
                <div class="nav_profile">
                    <!-- <profile></profile> -->
                </div>
                <vmenu>
                    <vmenu-item link="/" icon="ti-desktop">
                        &nbsp; Dashboard Data
                    </vmenu-item>
                  
                </vmenu>
                <!-- / .navigation -->
            </div>
            <!-- menu -->
        </section>
        <!-- /.sidebar -->
    </aside>
</template>
<script>
import { vmenu, vmenuItem, vsubMenu } from "./menu";
import profile from "../left-profile/user_profile.vue";
export default {
  name: "left-side",
  components: {
    vmenu,
    vsubMenu,
    vmenuItem,
    profile
  },
  data() {
    return {};
  }
};
</script>
