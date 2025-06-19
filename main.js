import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a]">
    <!-- Hero Section -->
    <section class="relative overflow-hidden">
      <div class="hero-gradient absolute inset-0"></div>
      <div class="container mx-auto px-4 py-20 relative z-10">
        <div class="max-w-4xl mx-auto text-center">
          <h1 class="text-4xl md:text-6xl font-bold text-white mb-6">
            一站式 AI 模型 API 集成平台
          </h1>
          <p class="text-xl md:text-2xl text-gray-300 mb-4">
            集成文本、绘画、视频、音乐大模型，保障高并发下的高效流媒体和稳定安全的服务
          </p>
          <p class="text-lg text-primary mb-8">
            邀请码邀请好友注册终身获得3%返利
          </p>
	<div class="flex flex-col sm:flex-row gap-4 justify-center">
	  <a href="https://api.apicore.ai/login" target="_blank" rel="noopener noreferrer" class="bg-primary hover:bg-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300">
	    开始使用
	  </a>
	  <a href="https://api.apicore.ai/pricing" target="_blank" rel="noopener noreferrer" class="border border-primary hover:border-secondary text-white font-bold py-3 px-8 rounded-lg transition duration-300">
	    查看模型列表
	  </a>
	</div>
          
          <div class="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">99.9%</div>
              <div class="text-gray-400">服务可用性</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2" id="modelCounter">0</div>
              <div class="text-gray-400">AI 模型支持</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">24/7</div>
              <div class="text-gray-400">技术支持</div>
            </div>
            <div class="text-center">
              <div class="text-4xl font-bold text-primary mb-2">#1</div>
              <div class="text-gray-400">性价比</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Benefits Section -->
    <section class="py-20 bg-[#111]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">我们有什么优势？</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">全网模型覆盖</h3>
            <p class="text-gray-300">集成国内外主流大模型，一个API即可访问所有模型，简化开发流程</p>
          </div>
          <div class="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">OpenAI直连优惠</h3>
            <p class="text-gray-300">官方API直连，价格低至官方的55%，稳定可靠的服务保障</p>
          </div>
          <div class="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">国内模型折扣</h3>
            <p class="text-gray-300">所有大模型 都提供实时输出，确保快速响应，非常适合需要即时反馈的场景应用。</p>
          </div>
          <div class="bg-[#1a1a1a] p-6 rounded-lg">
            <h3 class="text-xl font-bold text-primary mb-4">逆向模型超值</h3>
            <p class="text-gray-300">提供逆向工程模型，价格仅为官方十分之一，配套详细使用教程</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-20 bg-[#0a0a0a]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">API功能介绍</h2>
        <div class="grid md:grid-cols-2 gap-12">
          <div class="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">文本生成与对话</h3>
                <p class="text-gray-400">支持GPT-4、Claude、Gemini等主流大模型，提供稳定可靠的对话生成服务，满足不同场景需求</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">图像生成与处理</h3>
                <p class="text-gray-400">集成DALL-E 3、Midjourney等顶级绘画模型，支持文生图、图生图、图像编辑等多样化功能</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">视频生成与转换</h3>
                <p class="text-gray-400">提供视频生成、视频编辑、风格迁移等功能，支持高性能视频流处理和实时渲染</p>
              </div>
            </div>
          </div>
          <div class="bg-gradient-to-br from-[#1a1a1a] to-[#111] p-8 rounded-xl">
            <div class="flex items-start gap-4">
              <div class="bg-primary/10 p-3 rounded-lg">
                <svg class="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19V6l12-3v13M9 19c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zm12-3c0 1.105-1.343 2-3 2s-3-.895-3-2 1.343-2 3-2 3 .895 3 2zM9 10l12-3" />
                </svg>
              </div>
              <div>
                <h3 class="text-xl font-bold text-white mb-3">音频生成与合成</h3>
                <p class="text-gray-400">支持文本转语音、音乐生成、音频编辑等功能，提供自然流畅的语音合成服务</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Model Price Comparison Section -->
    <section class="py-20 bg-[#111]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">我们相比 OpenRouter.ai 的优势</h2>
        
        <!-- Desktop Table View -->
        <div class="hidden lg:block max-w-6xl mx-auto">
          <div class="bg-[#1a1a1a] rounded-xl overflow-hidden">
            <div class="grid grid-cols-3 bg-[#0a0a0a]">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-300">比较项</h3>
              </div>
              <div class="p-6 text-center border-l border-gray-700">
                <h3 class="text-xl font-bold text-primary">APICore.ai</h3>
              </div>
              <div class="p-6 text-center border-l border-gray-700">
                <h3 class="text-xl font-bold text-gray-300">OpenRouter.ai</h3>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">模型价格</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">更低，特别是 GPT-4、Claude、DeepSeek 等主流模型价格更实惠，按 Token 计费更透明</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">价格偏高</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">响应速度</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">速度快，国内访问无障碍</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">国际链路复杂，可能影响连接质量</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">使用门槛</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">零门槛试用，国内网络登录即可使用</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">需要海外网络，部分功能需登录</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">中文支持</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">中文文档完善，支持中文界面及客服，客服支持快速响应</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">中文支持有限</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">用户社群</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">建有微信社群，社群活跃，反馈直达开发团队</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">社区互动较少</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">API接入便捷性</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">提供丰富的 API 示例，多种语言调用代码</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">示例不多，配置复杂</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">稳定性和维护</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">多线路容灾自动切换，确保高可用</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">无说明</div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white">计费与结算</div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">支持中文发票，对公账户结算</div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">无法开具中文发票</div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Card View -->
        <div class="lg:hidden space-y-6">
          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              模型价格
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">更低，特别是 GPT-4、Claude、DeepSeek 等主流模型价格更实惠，按 Token 计费更透明</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">价格偏高</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              响应速度
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">速度快，国内访问无障碍</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">国际链路复杂，可能影响连接质量</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              使用门槛
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">零门槛试用，国内网络登录即可使用</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">需要海外网络，部分功能需登录</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              中文支持
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">中文文档完善，支持中文界面及客服，客服支持快速响应</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">中文支持有限</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              用户社群
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">建有微信社群，社群活跃，反馈直达开发团队</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">社区互动较少</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              API接入便捷性
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">提供丰富的 API 示例，多种语言调用代码</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">示例不多，配置复杂</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              稳定性和维护
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">多线路容灾自动切换，确保高可用</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">无说明</div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              计费与结算
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">支持中文发票，对公账户结算</div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">无法开具中文发票</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Price Comparison Section -->
    <section class="py-20 bg-[#0a0a0a]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">我们相比 OpenRouter.ai 的价格对比</h2>
        
        <!-- Desktop Table View -->
        <div class="hidden lg:block max-w-6xl mx-auto">
          <div class="bg-[#1a1a1a] rounded-xl overflow-hidden">
            <div class="grid grid-cols-3 bg-[#0a0a0a]">
              <div class="p-6 text-center">
                <h3 class="text-xl font-bold text-gray-300">AI 模型</h3>
              </div>
              <div class="p-6 text-center border-l border-gray-700">
                <h3 class="text-xl font-bold text-primary">APICore.ai 价格</h3>
              </div>
              <div class="p-6 text-center border-l border-gray-700">
                <h3 class="text-xl font-bold text-gray-300">OpenRouter.ai 价格</h3>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/K8ntq088/Chat-GPT-Logo.png" alt="ChatGPT" class="h-6 w-6 rounded" />
                  ChatGPT (GPT-4o)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥10 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥40 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 45%</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥18 / 1M tokens (输入)</div>
                  <div>¥72 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/NjXNk8Xg/claude-ai-icon-65aa.png" alt="Claude" class="h-6 w-6 rounded" />
                  Claude (Sonnet 4.0)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥15 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥75 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 30%</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥21.6 / 1M tokens (输入)</div>
                  <div>¥108 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/pX7vTtzp/google-gemini-icon.png" alt="Gemini" class="h-6 w-6" />
                  Gemini (Pro 1.5)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥2.5 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥20 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 72%</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥9 / 1M tokens (输入)</div>
                  <div>¥72 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/DzT8SFF2/flux-flux-logo-png-seeklogo-480255-transparent.png" alt="Flux" class="h-6 w-6" />
                  Flux (Pro)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥0.12 / 图片</div>
                  <div class="text-sm text-gray-400 mt-1">超高性价比</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥0.36 / 图片</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/Y0V31jqG/xAI-Logo.png" alt="Grok" class="h-6 w-6" />
                  Grok3 (Beta)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥8 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥40 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 63%</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥21.6 / 1M tokens (输入)</div>
                  <div>¥108 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
            
            <div class="grid grid-cols-3 border-t border-gray-700">
              <div class="p-6 border-r border-gray-700">
                <div class="text-lg font-semibold text-white flex items-center gap-2">
                  <img src="https://i.postimg.cc/YqhDhBqL/deep-seek-logo-whale-1ced.png" alt="DeepSeek" class="h-6 w-6" />
                  DeepSeek (V3)
                </div>
              </div>
              <div class="p-6 border-r border-gray-700 bg-primary/5">
                <div class="text-gray-300">
                  <div class="font-semibold text-primary">¥0.56 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥2.24 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">极致性价比，国产之光</div>
                </div>
              </div>
              <div class="p-6">
                <div class="text-gray-400">
                  <div>¥2.16 / 1M tokens (输入)</div>
                  <div>¥6.33 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Mobile Card View -->
        <div class="lg:hidden space-y-6">
          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/K8ntq088/Chat-GPT-Logo.png" alt="ChatGPT" class="h-6 w-6 rounded" />
              ChatGPT (GPT-4o)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">$2.5 / 1M tokens (输入)</div>
                  <div class="font-semibold">$10 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 45%</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>$5 / 1M tokens (输入)</div>
                  <div>$15 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/NjXNk8Xg/claude-ai-icon-65aa.png" alt="Claude" class="h-6 w-6 rounded" />
              Claude (Sonnet 3.5)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">$1.65 / 1M tokens (输入)</div>
                  <div class="font-semibold">$8.25 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 45%</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>$3 / 1M tokens (输入)</div>
                  <div>$15 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/pX7vTtzp/google-gemini-icon.png" alt="Gemini" class="h-6 w-6" />
              Gemini (Pro 2.5)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">$1.25 / 1M tokens (输入)</div>
                  <div class="font-semibold">$5 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">比官方价格低 50%</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>$2.5 / 1M tokens (输入)</div>
                  <div>$10 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/DzT8SFF2/flux-flux-logo-png-seeklogo-480255-transparent.png" alt="Flux" class="h-6 w-6" />
              Flux (Pro)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">$0.03 / 图片</div>
                  <div class="text-sm text-gray-400 mt-1">超高性价比</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>$0.05 / 图片</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/Y0V31jqG/xAI-Logo.png" alt="Grok" class="h-6 w-6" />
              Grok3 (Beta)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">¥8 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">¥40 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">独家接入，价格优势明显</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>¥21.6 / 1M tokens (输入)</div>
                  <div>¥108 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-[#1a1a1a] rounded-xl p-6">
            <h3 class="text-lg font-bold text-white mb-4 flex items-center gap-2">
              <img src="https://i.postimg.cc/YqhDhBqL/deep-seek-logo-whale-1ced.png" alt="DeepSeek" class="h-6 w-6" />
              DeepSeek (V3)
            </h3>
            <div class="space-y-3">
              <div class="bg-primary/10 p-4 rounded-lg">
                <div class="text-sm text-primary font-medium mb-1">APICore</div>
                <div class="text-gray-300">
                  <div class="font-semibold">$0.14 / 1M tokens (输入)</div>
                  <div class="font-semibold text-primary">$0.28 / 1M tokens (输出)</div>
                  <div class="text-sm text-gray-400 mt-1">极致性价比，国产之光</div>
                </div>
              </div>
              <div class="bg-[#0a0a0a] p-4 rounded-lg">
                <div class="text-sm text-gray-400 font-medium mb-1">OpenRouter.ai</div>
                <div class="text-gray-400">
                  <div>$0.27 / 1M tokens (输入)</div>
                  <div>$1.1 / 1M tokens (输出)</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-12 text-center">
          <div class="bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/30 rounded-xl p-6">
            <h3 class="text-xl font-bold text-white mb-2">💰 价格优势说明</h3>
            <p class="text-gray-300">
              我们直接对接官方API，去除中间环节，为您提供更优惠的价格。所有价格均为实时更新，确保您享受到最具竞争力的定价。
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Models Section -->
    <section class="py-20 bg-[#111]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-4">
          <div class="inline-block">
            <svg class="w-8 h-8 text-primary mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" />
            </svg>
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">持续接入最新的AI模型</h2>
          <p class="text-xl text-gray-400">文字/图片/声音/视频/RAG，应有尽有</p>
        </div>

        <div class="mt-12">
          <div class="bg-[#1a1a1a] rounded-lg p-6">
            <div class="flex flex-wrap gap-4" id="modelTabs">
              <button class="bg-black text-white px-4 py-2 rounded-full" data-tab="language">语言模型</button>
              <button class="text-gray-400 px-4 py-2 rounded-full hover:bg-black/50" data-tab="image">图像生成</button>
              <button class="text-gray-400 px-4 py-2 rounded-full hover:bg-black/50" data-tab="video">视频生成</button>
              <button class="text-gray-400 px-4 py-2 rounded-full hover:bg-black/50" data-tab="music">音乐模型</button>
              <button class="text-gray-400 px-4 py-2 rounded-full hover:bg-black/50" data-tab="voice">声音处理</button>
            </div>

            <div class="mt-8" id="modelContent">
              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 model-content" id="languageContent">
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200 flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/K8ntq088/Chat-GPT-Logo.png" alt="ChatGPT" class="h-10 mb-1 rounded" />
				  <span class="text-white text-[13px] font-medium tracking-wide">ChatGPT</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/NjXNk8Xg/claude-ai-icon-65aa.png" alt="Claude" class="h-10 mb-1 rounded" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Claude</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/pX7vTtzp/google-gemini-icon.png" alt="Gemini" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Gemini</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/Y0V31jqG/xAI-Logo.png" alt="Grok" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Grok</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/YqhDhBqL/deep-seek-logo-whale-1ced.png" alt="DeepSeek" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">DeepSeek</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/kMY31djf/doubao-color.png" alt="豆包" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">豆包</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/1zZvCg0D/qwen.png" alt="Qwen" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Qwen</span>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 model-content hidden" id="imageContent">
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/DzT8SFF2/flux-flux-logo-png-seeklogo-480255-transparent.png" alt="Flux" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Flux</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/K8ntq088/Chat-GPT-Logo.png" alt="Dalle" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Dalle</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/wjKrZxDc/kling-color.png" alt="Kling" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Kling</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/kMY31djf/doubao-color.png" alt="豆包" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Qwen</span>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 model-content hidden" id="videoContent">
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/wjKrZxDc/kling-color.png" alt="Kling" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Kling</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/1zZvCg0D/qwen.png" alt="Pika" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Pika</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/T2gNmMzK/runway.png" alt="Runway" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Runway</span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/QCQ6r1QQ/image.png" alt="即梦" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide"></span>
                </div>
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/pX7vTtzp/google-gemini-icon.png" alt="Veo3" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Veo3</span>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 model-content hidden" id="musicContent">
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/X7WHk1WQ/suno.png" alt="Suno" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">Suno</span>
                </div>
              </div>

              <div class="grid grid-cols-2 md:grid-cols-4 gap-8 model-content hidden" id="voiceContent">
                <div class="flex items-center justify-center flex-col transition-transform hover:scale-105 duration-200">
                  <img src="https://i.postimg.cc/K8ntq088/Chat-GPT-Logo.png" alt="TTS" class="h-8" />
				  <span class="text-white text-[13px] font-medium tracking-wide">TTS</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="mt-16">
          <div class="text-center mb-8">
            <h3 class="text-2xl font-bold text-white mb-4">接入模型 300+</h3>
          </div>
          <div class="flex flex-wrap justify-center gap-4">
            <div class="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-400">gpt-4o-2024-05-13</span>
            </div>
            <div class="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-400">deepseek-r1-250528</span>
            </div>
            <div class="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-400">claude-sonnet-4-20250514</span>
            </div>
            <div class="flex items-center gap-2 bg-[#1a1a1a] px-4 py-2 rounded-full">
              <span class="w-2 h-2 bg-primary rounded-full"></span>
              <span class="text-gray-400">gemini-2.5-flash-preview-05-20</span>
            </div>
          </div>
          <div class="text-center mt-8">
            <a href="https://api.apicore.ai/pricing" target="_blank" class="inline-block bg-primary/10 text-primary px-6 py-2 rounded-lg hover:bg-primary/20 transition duration-300">
              查看更多模型
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-[#0a0a0a]">
      <div class="container mx-auto px-4">
        <div class="text-center mb-12">
          <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">为什么选择我们？</h2>
          <p class="text-xl text-gray-400">整合全球领先的人工智能技术，提供稳定、最高水平的人工智能支持，完美兼容各个平台的接口协议，开发者基础直接无缝对接各种应用</p>
        </div>

        <div class="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          <div class="bg-gradient-to-br from-blue-400/10 to-blue-600/10 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">相比国外API</h3>
            <div class="space-y-4">
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">支持数百个账户保证高并发</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">无需注册官方账号</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">账号额度永不过期</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">无风控问题</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">实时查看每条使用明细</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">无需代理访问</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">1计算</div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-red-400/10 to-red-600/10 rounded-2xl p-8">
            <h3 class="text-2xl font-bold text-white mb-6">官方</h3>
            <div class="space-y-4">
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">单个账号 API 有限制</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">需要科学和绑定国外手机</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">按月计算</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">随时可能无故封号</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">只能查看延迟总消耗</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">需要在可支持的地区使用</div>
              <div class="bg-white/5 rounded-lg p-3 text-gray-300">以美金兑人民币计算</div>
            </div>
          </div>
        </div>

        <div class="mt-20">
          <div class="grid md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <div class="bg-[#1a1a1a] rounded-xl p-8">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-3">实惠的定价与模型分组系统</h3>
                  <p class="text-gray-400">APICore.ai提供令牌分组能够自定义选择哪个类型的api，也可以通过免费试用体验我们的 AI 接口</p>
                </div>
              </div>
            </div>

            <div class="bg-[#1a1a1a] rounded-xl p-8">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-3">易于集成的 API 文档</h3>
                  <p class="text-gray-400">我们的 API 文档提供详清晰、全面的说明，帮助您轻松将先进的 AI 能力集成到项目中，无需复杂设置。</p>
                </div>
              </div>
            </div>

            <div class="bg-[#1a1a1a] rounded-xl p-8">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-3">24小时全天候监控与客户支持</h3>
                  <p class="text-gray-400">APICore.ai 提供 24 小时全天候监控与客户支持，确保您的 API 高效稳定运行，我们的专业技术团队随时为您提供帮助。</p>
                </div>
              </div>
            </div>

            <div class="bg-[#1a1a1a] rounded-xl p-8">
              <div class="flex items-start gap-4">
                <div class="bg-primary/10 p-3 rounded-lg">
                  <svg class="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold text-white mb-3">实时输出</h3>
                  <p class="text-gray-400">所有大模型 都提供实时输出，确保快速响应，非常适合需要即时反馈的场景应用。</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-[#111]">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl md:text-4xl font-bold text-white text-center mb-16">常见问题</h2>
        
        <div class="max-w-3xl mx-auto space-y-6">
          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">什么是 APICore.ai？它是如何工作的？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              APICore.ai 是一个 AI 平台，为开发者和企业提供先进的 AI 接口，它提供强大的 AI 接口，支持文本生成、音乐创作、视频生成等多种功能。
            </div>
          </div>

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">APICore.ai 是否提供免费试用？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              是的，APICore.ai 提供免费试用，您可以在开始付费计划前，先体验我们的 AI 接口功能。这有助于开发者和企业在实际环境中测试功能。
            </div>
          </div>

          

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">APICore.ai 的定价模型是什么？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              APICore.ai 提供灵活的定价体系，采用基于1计算的定价模型，使初创企业或者个人独立开发也能负担得起。详细的定价计划可以在我们的网站上查看，适应不同的使用需求。
            </div>
          </div>

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">如何将 APICore.ai 的 API 集成到我的项目中？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              集成 AI 接口的步骤是：首先注册账号，获取 API 密钥，然后按照 API 文档进行配置。如果遇到任何问题，请随时联系我们的支持团队。
            </div>
          </div>

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">APICore.ai适用于哪些人群？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              <p class="mb-2">个人用户：提供全方位功能支持，快速迭代更新，灵活的按量计费模式，简单易用且方便分享。</p>
              <p>企业用户：快速部署集成，零技术门槛，成本可控，支持开源生态系统，可定制化开发。</p>
            </div>
          </div>

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">APICore.ai提供哪些技术支持？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              我们提供完整的技术支持体系，包括详细的在线文档中心、实时API调试工具、24/7在线客服支持、专属客户经理服务，以及活跃的AI开发者社区。作为专业的技术团队，我们承诺及时解决每一个问题，满足所有开发需求。
            </div>
          </div>

          <div class="border-b border-gray-800 pb-6">
            <button class="w-full flex items-center justify-between text-left" data-faq>
              <h3 class="text-xl text-white font-semibold">APICore.ai是否支持多用户同时使用？</h3>
              <svg class="w-6 h-6 text-primary transform transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
            <div class="mt-4 text-gray-400 hidden">
              支持，因为可以创建多个令牌，每个令牌可以单独看见计费，非常的直观，每一次调用都可以溯源查到相关信息。
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
`

document.addEventListener('DOMContentLoaded', () => {
  // Counter animation
  const counterElement = document.getElementById('modelCounter');
  const targetNumber = 300;
  let currentNumber = 0;
  const duration = 2000; // 2 seconds
  const interval = 20; // Update every 20ms
  const steps = duration / interval;
  const increment = targetNumber / steps;

  const updateCounter = () => {
    if (currentNumber < targetNumber) {
      currentNumber = Math.min(currentNumber + increment, targetNumber);
      counterElement.textContent = Math.round(currentNumber) + '+';
      requestAnimationFrame(updateCounter);
    }
  };

  // Start counter animation when element is in view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        updateCounter();
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  observer.observe(counterElement);

  // Existing tab functionality
  const tabs = document.querySelectorAll('[data-tab]');
  const contents = document.querySelectorAll('.model-content');

  function showContent(tabId) {
    tabs.forEach(t => {
      t.classList.remove('bg-black', 'text-white');
      t.classList.add('text-gray-400');
    });

    const selectedTab = document.querySelector(`[data-tab="${tabId}"]`);
    selectedTab.classList.remove('text-gray-400');
    selectedTab.classList.add('bg-black', 'text-white');

    contents.forEach(content => {
      content.classList.add('hidden');
    });

    const contentId = tabId + 'Content';
    document.getElementById(contentId).classList.remove('hidden');
  }

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const tabId = tab.getAttribute('data-tab');
      showContent(tabId);
    });
  });

  // FAQ functionality
  const faqButtons = document.querySelectorAll('[data-faq]');
  
  faqButtons.forEach(button => {
    button.addEventListener('click', () => {
      const content = button.nextElementSibling;
      const icon = button.querySelector('svg');
      
      content.classList.toggle('hidden');
      icon.style.transform = content.classList.contains('hidden') ? 'rotate(0deg)' : 'rotate(45deg)';
    });
  });

  // Section animation
  const sections = document.querySelectorAll('section');
  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    sectionObserver.observe(section);
  });
});

// 兼容 Chatway 最新浮窗位置调整（使用类名）
setTimeout(() => {
  const launcher = document.querySelector('[class*="launcher"], [id*="launcher"]');
  if (launcher) {
    launcher.style.bottom = '120px';
    launcher.style.right = '20px';
    launcher.style.zIndex = '9999';
  } else {
    console.log('Chatway launcher not found.');
  }
}, 1500); // 延迟略长，确保 Chatway 脚本完全加载

