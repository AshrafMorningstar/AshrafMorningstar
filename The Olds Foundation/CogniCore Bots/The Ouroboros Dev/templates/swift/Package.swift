// swift-tools-version:5.5
import PackageDescription

let package = Package(
    name: "SwiftStarter",
    platforms: [.macOS(.v10_15)],
    products: [
        .executable(name: "SwiftStarter", targets: ["SwiftStarter"]),
    ],
    targets: [
        .executableTarget(
            name: "SwiftStarter",
            path: "Sources"
        ),
    ]
)
