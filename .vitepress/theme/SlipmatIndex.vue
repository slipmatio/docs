<script setup lang="ts">
import DefaultTheme from 'vitepress/theme'

const { Layout } = DefaultTheme
</script>

<template>
  <Layout>
    <template #home-features-after>
      <main class="main home">
        <div class="vp-doc">
          <p>
            This is the official documentation for the development version of Slipmat.io v3. Please
            note that this documentation is a <strong>work in progress</strong>, so unless
            explicitly stated, nothing you see here is to be considered final.
          </p>
          <p>
            This documentation is <strong>open source</strong> and
            <a href="/development/contributing/">anyone can contribute</a>.
          </p>
          <ul>
            <li
              ><a href="/development/#how-to-report-issues">How to browse and report issues</a></li
            >
            <li><a href="/development/#roadmap">Slipmat Public Roadmap</a></li>
          </ul>
          <h2>Relevant Links</h2>
          <ul>
            <li
              >Backstage:
              <a href="https://backstage.slipmat.io">https://backstage.slipmat.io</a></li
            >
            <li
              >Slipmat v3 development site:
              <a href="https://stage.slipmat.io">https://stage.slipmat.io</a></li
            >
            <li
              >Open issues:
              <a href="https://gitlab.com/slipmatio/development"
                >https://gitlab.com/slipmatio/development</a
              ></li
            >
            <li
              >Developer Docs:
              <a href="https://gitlab.com/slipmatio/slipmat3-devdocs"
                >https://gitlab.com/slipmatio/slipmat3-devdocs</a
              ></li
            >
          </ul>
        </div>
      </main>
    </template>
  </Layout>
</template>

<style>
.VPHomeHero .actions {
  justify-content: center;
}

.main.home {
  max-width: 45rem;
  padding: 0 1.5rem;
  margin-left: auto;
  margin-right: auto;
}
</style>
