    <?php if($_SERVER['REQUEST_URI'] !== "/"){ ?>
    <?php pankuzu(@$pankuzu) ?>
    <?php } ?>

    <!-- Footer
    ───────────────────────────────── -->
    <footer class="footer" role="contentinfo">

    </footer>
  </div>

  <script defer src="/asset/js/vendor.js?v=<?php echo $cache_version;?>"></script>
  <script defer src="/asset/js/script.js?v=<?php echo $cache_version;?>"></script>

</body>
</html>
