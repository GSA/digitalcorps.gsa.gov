require 'fileutils'

module AssetHelper
    def self.process(site, payload)
        return if @processed
        FileUtils.cp_r('node_modules/@uswds/uswds/packages/uswds/_index.scss', 'assets/', verbose: true)
        @processed = true
    end
end
  
Jekyll::Hooks.register :site, :after_reset do |site, payload|
    AssetHelper.process(site, payload)
end