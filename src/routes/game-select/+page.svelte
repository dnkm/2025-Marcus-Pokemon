<script>
  const { data } = $props();
  const { generations } = $derived(data);
  const { count, results } = $derived(data.generations);

  let openGen = $state(null); // currently opened generation id/name
  let generationDetails = $state({}); // cache of loaded details keyed by gen.name
  let loadingMap = $state({}); // loading flags per gen

  async function loadGenerationDetail(gen) {
    console.log("Loading generation detail for:", gen);
    let { version_groups } = await (await fetch(gen.url)).json();
    console.log("loadGenerationDetail data:", version_groups);

    let versions = (
      await Promise.all(
        version_groups.map(async (vg) => {
          let { versions } = await (await fetch(vg.url)).json();
          return versions.map((v) => v.name);
        })
      )
    ).flat();

    return versions;
  }

  async function handleOpen(gen) {
    openGen = gen.name;
    if (generationDetails[gen.name] || loadingMap[gen.name]) return;

    loadingMap = { ...loadingMap, [gen.name]: true };
    const detail = await loadGenerationDetail(gen);
    generationDetails = { ...generationDetails, [gen.name]: detail ?? [] };
    loadingMap = { ...loadingMap, [gen.name]: false };
  }
</script>

<!-- Cool Title Header -->
<div class="hero min-h-[200px] to-red-600">
  <div class="hero-content text-center">
    <div class="max-w-md">
      <h1 class="text-5xl font-bold mb-4">⚡ Deck Builder ⚡</h1>
      <p class="text-xl opacity-90 mb-2">Choose Your Generation</p>
      <p class="text-lg opacity-80">
        Build your ultimate custom team from your favorite Pokémon era!
      </p>
    </div>
  </div>
</div>

<div class="join join-vertical p-6 flex flex-col">
  {#each results as gen}
    <div class="collapse collapse-arrow join-item border-base-300 border">
      <input
        type="radio"
        name="gen-accordion"
        value={gen.name}
        bind:group={openGen}
        onchange={() => handleOpen(gen)}
      />
      <div class="collapse-title font-semibold">{gen.name}</div>
      <div class="collapse-content text-sm px-12">
        {#if loadingMap[gen.name]}
          <div class="py-3 text-gray-500">Loading games…</div>
        {:else if generationDetails[gen.name]}
          <ul class="list-disc list-inside space-y-1">
            {#each generationDetails[gen.name] as title}
              <li><a href={`/game/${title}`}>{title}</a></li>
            {/each}
          </ul>
        {:else}
          <div class="py-3 text-gray-400">Loading...</div>
        {/if}
      </div>
    </div>
  {/each}
</div>
