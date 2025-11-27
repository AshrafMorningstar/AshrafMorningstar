// swift-tools-version:5.6
import PackageDescription

let package = Package(
    name: "SwiftStarter",
    products: [.executable(name: "SwiftStarter", targets: ["App"])],
    targets: [
        .executableTarget(name: "App", path: "Sources")
    ]
)
