"use client"

import { useState } from "react"

const clientAppSettings = {
  "FFlagHandleAltEnterFullscreenManually": "True",
  "DFIntTaskSchedulerTargetFps": 999999,
  "FLogNetwork": "0",
  "FFlagFixGraphicsQuality": "True",
  "FFlagDisablePostFx": "True",
  "DFFlagDebugPauseVoxelizer": "True",
  "DFIntCSGLevelOfDetailSwitchingDistance": "0",
  "DFIntCSGLevelOfDetailSwitchingDistanceL12": "0",
  "DFIntCSGLevelOfDetailSwitchingDistanceL23": "0",
  "DFIntCSGLevelOfDetailSwitchingDistanceL34": "0",
  "DFIntDebugFRMQualityLevelOverride": "1",
  "FIntTerrainArraySliceSize": "1",
  "FIntRenderShadowIntensity": "0",
  "FIntFRMMaxGrassDistance": "0",
  "FIntFRMMinGrassDistance": "0",
  "FFlagAdServiceEnabled": "False",
  "FFlagDebugDisableTelemetryEphemeralCounter": "True",
  "FFlagDebugDisableTelemetryEphemeralStat": "True",
  "FFlagDebugDisableTelemetryEventIngest": "True",
  "FFlagDebugDisableTelemetryPoint": "True",
  "FFlagDebugDisableTelemetryV2Counter": "True",
  "FFlagDebugDisableTelemetryV2Event": "True",
  "FFlagDebugDisableTelemetryV2Stat": "True",
  "DFFlagDebugRenderForceTechnologyVoxel": "False",
  "FFlagDisableTextureStreaming": "True",
  "DFIntTextureQuality": "1",
  "DFIntMaxTextureSize": "32",
  "FFlagEnableQuickGameLaunch": "True",
  "FFlagPreloadAllFonts": "False",
  "FFlagPreloadTextures": "False",
  "FFlagUseShadowMap": "False",
  "FIntDefaultMeshCacheSizeMB": "16",
  "FIntEmotesAnimationsMemoryCacheSize": "0",
  "FIntEnableCameraByDefault": "False",
  "FIntFRMMinDistance": "0",
  "FIntPGSAngularDampingPermillPersecond": "1000000",
  "FIntSSAOBlurPasses": "0",
  "FIntUITextureMaxRenderTextureSize": "64",
  "FStringPartTexturePackTable2022": "{ }",
  "FFlagRenderGpuTextureCompressor": "False",
  "DFIntGPUTextureCompressorWorkerCount": "1",
  "FFlagDebugGraphicsDisableDirect3D11": "False",
  "FFlagDebugGraphicsPreferOpenGL": "False",
  "FFlagGraphicsEnableSignal": "False",
  "FFlagDisableGPUAcceleration": "False",
  "DFIntGraphicsQualityLevel": "1",
  "FFlagDisableAllTextureStreaming": "True",
  "FFlagDisableHWAcceleration": "False",
  "FFlagDisableRenderingTextures": "True",
  "FFlagFastLightUpdates": "True",
  "FFlagEnableFrameRateManager": "True",
  "DFIntMaxFrameBufferSize": "128",
  "DFIntLightingDefaultCellsPerAxis": "1",
  "FFlagDisableShadows": "True",
  "FFlagSimplifiedChatFilterEnable": "True",
  "DFFlagAvatarChatServiceEnabled": "False",
  "DFFlagAvatarChatEnableVoiceChat": "False",
  "FFlagEnableInGameMenuV3": "False",
  "FFlagFacialAnimationStreamingServiceEnabled": "False",
  "FFlagVoiceChatServiceEnabled": "False",
  "FFlagAudioDeviceSelectorEnabled": "False",
  "FFlagDebugForceFSMCPULightingOnPC": "True",
  "FIntFSMCPULightingPercentage": "5",
  "FFlagGpuGeometryManager": "False",
  "FFlagFastGPULightCulling3": "False",
  "FFlagDebugForceCPULightCulling": "True",
  "FFlagDebugForceMoveToCPU": "True",
  "DFIntDebugLightUpdateMode": "2",
  "FFlagDisableDynamicLights": "True",
  "FFlagDisableEnvironmentLighting": "True",
  "FFlagDisablePointLights": "True",
  "FFlagDisableSpotLights": "True",
  "FFlagDisableSurfaceLights": "True",
  "FFlagDisableVoxelLighting": "True",
  "FFlagRenderForceNoShadows": "True",
  "FFlagRenderForceLowQualityTextures": "True",
  "FFlagRenderLowDetailCharacters": "True",
  "FFlagRenderLowDetailEnvironment": "True",
  "FFlagRenderLowDetailModels": "True",
  "FFlagRenderLowDetailTerrain": "True",
  "DFIntRenderClipPlaneNear": "5",
  "DFIntRenderClipPlaneFar": "400",
  "DFIntRenderShadowmapSize": "0",
  "DFIntRenderShadowmapResolution": "0",
  "FFlagDisableTerrainTextures": "True",
  "FFlagDisableCharacterTextures": "False",
  "FFlagDisableEnvironmentTextures": "True",
  "FFlagDisableModelTextures": "True",
  "FFlagDisableUITextures": "False",
  "FFlagForceBasicMaterials": "True",
  "DFIntMeshContentProviderForceCacheSize": "8",
  "DFIntTextureCompositorDefaultMaxTextureSize": "16",
  "FFlagDisableQualityLevelSelection": "True",
  "DFIntMaxTextureChannels": "1",
  "FFlagForceNoDecals": "True",
  "FFlagDisableSpecialEffects": "True",
  "FFlagDisableParticleEffects": "True",
  "FFlagDisableStudioSpecialEffects": "True",
  "DFIntParticleMaxCount": "5",
  "DFIntParticleMaxEmitters": "2",
  "FFlagStreamingEnabled": "False",
  "FIntStreamingTargetTextureSizeMB": "8",
  "FFlagEnableAudioOutputDevice": "False",
  "DFIntCSRMaxStreamedRegionsPerFrame": "1",
  "FFlagDebugSkyGray": "True",
  "FFlagGlobalWindRendering": "False",
  "FIntRenderGrassDetailStrands": "0",
  "DFIntAnimationLodFadeInOutDistanceMax": "0",
  "DFIntAnimationLodFadeInOutDistanceMin": "0",
  "FFlagRenderNoPhysicalProperties": "True",
  "FFlagRenderCheckThreading": "False",
  "DFIntRenderingThrottleDelayInMS": "0",
  "FFlagEnableRealtimeShadows": "False",
  "FFlagRenderEnableGlobalShadows": "False",
  "DFIntMaxFrameTimeSmoothing": "0",
  "FFlagRenderNewTerrainOptimization": "True",
  "FIntRenderLocalLightUpdatesMax": "1",
  "FIntRenderLocalLightUpdatesMin": "1",
  "DFIntDebugTextureManagerSkipUpload": "1",
  "FFlagDisableNewMaterials": "True",
  "FFlagRenderOptimize": "True",
  "FFlagRenderLightGridV2Parallel": "True",
  "FFlagRenderLightGridV2OptimizeSetPixels": "True",
  "FFlagRenderOptimizeNoRenderStep": "True",
  "FFlagRenderLightGridV2Enable": "False",
  "FFlagRenderLightGridEnable": "False",
  "DFIntTextureStreamingMaxMipLevelsPerJob": "1",
  "DFIntTextureStreamingMaxMipLevelsPerFrame": "1",
  "FIntDebugTextureManagerSkipMips": "4",
  "FFlagDebugDisableMipMapGeneration": "True",
  "FFlagRenderScreenGlow": "False",
  "FFlagRenderSunShadowPCFStrength": "False",
  "FFlagRenderNoBloom": "True",
  "FFlagRenderNoFog": "True",
  "FFlagRenderNoSunRays": "True",
  "FFlagRenderNoDOF": "True",
  "FFlagRenderNoColorCorrection": "True",
  "DFIntTimestepArbiterThresholdCFLThou": "1",
  "FFlagBatchSkinRenderGeneral": "True",
  "FFlagBatchSkinRenderNoUpload": "True",
  "FFlagRenderCutHumanoidVisibility": "True",
  "FFlagOptimizeRenderingThrottling": "True",
  "DFIntJobOptimizationFrequency": "100",
  "FFlagEnableRenderJobOptimization": "True",
  "FFlagEnableUnifiedRenderJob": "True",
  "FFlagFastRenderAssetsLoad": "True",
  "DFIntNumRenderThreads": "2"
}

export default function Home() {
  const [copied, setCopied] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleDownload = () => {
    const blob = new Blob([JSON.stringify(clientAppSettings, null, 2)], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = "ClientAppSettings.json"
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
    setDownloaded(true)
    setTimeout(() => setDownloaded(false), 2000)
  }

  const handleCopyPath = () => {
    navigator.clipboard.writeText("%localappdata%\\Roblox\\Versions")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-[#1a1a2e] text-white">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#e94560]">
            Roblox Performance Optimizer
          </h1>
          <p className="text-lg text-gray-300">
            Mejora el rendimiento de Roblox con FFlags optimizadas
          </p>
        </div>

        {/* Download Section */}
        <div className="bg-[#16213e] rounded-xl p-6 mb-8 border border-[#e94560]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#e94560]">Paso 1: Descargar</h2>
          <p className="text-gray-300 mb-4">
            Descarga el archivo de configuracion con mas de 130 flags optimizadas para maximo rendimiento.
          </p>
          <button
            onClick={handleDownload}
            className="w-full sm:w-auto px-6 py-3 bg-[#e94560] hover:bg-[#e94560]/80 text-white font-semibold rounded-lg transition-colors"
          >
            {downloaded ? "Descargado" : "Descargar ClientAppSettings.json"}
          </button>
        </div>

        {/* Installation Section */}
        <div className="bg-[#16213e] rounded-xl p-6 mb-8 border border-[#e94560]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#e94560]">Paso 2: Instalar</h2>
          <ol className="list-decimal list-inside space-y-4 text-gray-300">
            <li>
              Abre el Explorador de Archivos y navega a:
              <div className="mt-2 flex flex-col sm:flex-row gap-2">
                <code className="flex-1 bg-[#0f3460] px-3 py-2 rounded text-sm font-mono text-[#e94560] block">
                  %localappdata%\Roblox\Versions
                </code>
                <button
                  onClick={handleCopyPath}
                  className="px-4 py-2 bg-[#0f3460] hover:bg-[#0f3460]/80 text-white rounded transition-colors text-sm"
                >
                  {copied ? "Copiado" : "Copiar ruta"}
                </button>
              </div>
            </li>
            <li>
              Busca la carpeta que empiece con <code className="bg-[#0f3460] px-2 py-1 rounded text-[#e94560]">version-</code> (ejemplo: version-abc123)
            </li>
            <li>
              Dentro de esa carpeta, crea una nueva carpeta llamada <code className="bg-[#0f3460] px-2 py-1 rounded text-[#e94560]">ClientSettings</code>
            </li>
            <li>
              Copia el archivo <code className="bg-[#0f3460] px-2 py-1 rounded text-[#e94560]">ClientAppSettings.json</code> dentro de la carpeta ClientSettings
            </li>
            <li>
              Reinicia Roblox para aplicar los cambios
            </li>
          </ol>
        </div>

        {/* Optimizations Info */}
        <div className="bg-[#16213e] rounded-xl p-6 mb-8 border border-[#e94560]/20">
          <h2 className="text-2xl font-semibold mb-4 text-[#e94560]">Optimizaciones incluidas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="bg-[#0f3460] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Graficos</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>- Sombras desactivadas</li>
                <li>- Texturas de baja calidad</li>
                <li>- Efectos post-proceso desactivados</li>
                <li>- Particulas reducidas</li>
              </ul>
            </div>
            <div className="bg-[#0f3460] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Rendimiento</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>- FPS desbloqueados</li>
                <li>- Telemetria desactivada</li>
                <li>- Carga rapida de juegos</li>
                <li>- Optimizacion de hilos</li>
              </ul>
            </div>
            <div className="bg-[#0f3460] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Iluminacion</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>- Luces dinamicas desactivadas</li>
                <li>- Voxel lighting desactivado</li>
                <li>- Luces ambientales reducidas</li>
                <li>- CPU lighting forzado</li>
              </ul>
            </div>
            <div className="bg-[#0f3460] rounded-lg p-4">
              <h3 className="font-semibold text-white mb-2">Extras</h3>
              <ul className="text-sm text-gray-300 space-y-1">
                <li>- Anuncios desactivados</li>
                <li>- Voice chat desactivado</li>
                <li>- Avatar chat desactivado</li>
                <li>- Streaming optimizado</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Warning */}
        <div className="bg-[#0f3460] rounded-xl p-6 border border-yellow-500/30">
          <h2 className="text-xl font-semibold mb-2 text-yellow-400">Nota importante</h2>
          <p className="text-gray-300 text-sm">
            Estas configuraciones estan disenadas para PCs de bajos recursos. Los graficos se veran significativamente reducidos a cambio de mejor rendimiento. Si tienes una PC potente, es posible que no necesites todas estas optimizaciones. Puedes revertir los cambios eliminando la carpeta ClientSettings.
          </p>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 text-gray-500 text-sm">
          <p>Roblox Performance Optimizer - Uso bajo tu propia responsabilidad</p>
        </div>
      </div>
    </main>
  )
}
