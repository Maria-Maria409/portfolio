<template>
  <v-container class="section-container about-section py-16">
    <div class="about-grid">
      <div>
        <p class="section-kicker mb-3">About</p>
        <h2 class="section-title font-weight-black mb-5">
          Developer mindset, product taste, and practical delivery.
        </h2>
        <p class="about-copy">
          I work across front-end, back-end, mobile, and automation. My favorite projects are the ones where the interface feels simple, the architecture stays maintainable, and users can move through the product without friction.
        </p>
        <p class="about-copy">
          I have built B2B networking tools, mobile apps, responsive dashboards, AI-assisted workflows, and RPA automations using Vue, React Native, Nest.js, FlutterFlow, Supabase, MongoDB, Neo4j, and Robocorp.
        </p>
      </div>

      <div class="about-card glass-panel">
        <div
          v-for="stat in stats"
          :key="stat.label"
          class="stat-row"
        >
          <v-icon color="primary" size="28">{{ stat.icon }}</v-icon>
          <div>
            <strong>{{ stat.value }}</strong>
            <span>{{ stat.label }}</span>
          </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<script setup>
const stats = [
  { icon: 'mdi-briefcase-outline', value: '5+', label: 'years of web and mobile development' },
  { icon: 'mdi-cellphone-link', value: '4', label: 'featured applications in the portfolio' },
  { icon: 'mdi-layers-triple-outline', value: 'Full stack', label: 'from interface to API and database' },
  { icon: 'mdi-robot-outline', value: 'Automation', label: 'RPA and AI-assisted workflows' },
]
</script>

<style scoped>
.about-section {
  scroll-margin-top: 90px;
}

.about-grid {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 0.56fr);
  gap: clamp(28px, 5vw, 64px);
  align-items: center;
}

.about-copy {
  color: rgba(226, 232, 240, 0.78);
  font-size: 1.06rem;
  line-height: 1.8;
  margin-bottom: 18px;
}

.about-card {
  display: grid;
  gap: 12px;
  padding: 22px;
  border-radius: 24px;
}

.stat-row {
  display: flex;
  gap: 14px;
  align-items: flex-start;
  padding: 16px;
  border-radius: 18px;
  background: rgba(255, 255, 255, 0.045);
}

.stat-row strong,
.stat-row span {
  display: block;
}

.stat-row strong {
  font-size: 1.08rem;
  color: #f8fafc;
}

.stat-row span {
  color: rgba(226, 232, 240, 0.68);
  line-height: 1.5;
}

@media (max-width: 900px) {
  .about-grid {
    grid-template-columns: 1fr;
  }
}
</style>
