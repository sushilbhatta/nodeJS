//os modules
//intracting with the operating system and Server
const os = require("node:os")

const osModule = {
  CPUArchitecture: os.arch(),
  osConstants: os.cpus(),
  FreeMemory: os.freemem(),
  currentUserHomeDir: os.homedir(),
  HostName: os.hostname(),
  loadAvg: os.loadavg(),
  //The load average is a measure of system activity calculated by the operating system and expressed as a fractional number.
  //it is a unix concep tso it is always zero in window
  networkInterface: os.networkInterfaces(),
  Platform: os.platform(),
  release: os.release(),
}
console.log(osModule)
