#!/usr/bin/env python3
"""
Advanced Python Example - Data Processing and Analysis System
Demonstrates: Classes, decorators, generators, context managers, async/await
"""

import asyncio
import json
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from typing import List, Dict, Optional, Generator
from datetime import datetime
from functools import wraps
import statistics


def timer_decorator(func):
    """Decorator to measure function execution time"""
    @wraps(func)
    def wrapper(*args, **kwargs):
        start = datetime.now()
        result = func(*args, **kwargs)
        end = datetime.now()
        print(f"{func.__name__} took {(end - start).total_seconds():.4f} seconds")
        return result
    return wrapper


@dataclass
class DataPoint:
    """Represents a single data point"""
    timestamp: datetime
    value: float
    category: str
    metadata: Dict = field(default_factory=dict)

    def __str__(self):
        return f"DataPoint({self.category}: {self.value} at {self.timestamp})"


class DataProcessor(ABC):
    """Abstract base class for data processors"""

    @abstractmethod
    def process(self, data: List[DataPoint]) -> Dict:
        pass

    @abstractmethod
    def validate(self, data: List[DataPoint]) -> bool:
        pass


class StatisticalProcessor(DataProcessor):
    """Processes data using statistical methods"""

    def __init__(self, name: str):
        self.name = name
        self.processed_count = 0

    def validate(self, data: List[DataPoint]) -> bool:
        """Validate data integrity"""
        if not data:
            return False
        return all(isinstance(dp, DataPoint) for dp in data)

    @timer_decorator
    def process(self, data: List[DataPoint]) -> Dict:
        """Calculate statistical metrics"""
        if not self.validate(data):
            raise ValueError("Invalid data")

        values = [dp.value for dp in data]
        self.processed_count += len(values)

        return {
            'mean': statistics.mean(values),
            'median': statistics.median(values),
            'stdev': statistics.stdev(values) if len(values) > 1 else 0,
            'min': min(values),
            'max': max(values),
            'count': len(values)
        }


class DataGenerator:
    """Generates sample data using generators"""

    @staticmethod
    def generate_data_points(count: int) -> Generator[DataPoint, None, None]:
        """Generate data points lazily"""
        categories = ['A', 'B', 'C', 'D']
        for i in range(count):
            yield DataPoint(
                timestamp=datetime.now(),
                value=float(i * 1.5 + (i % 10)),
                category=categories[i % len(categories)],
                metadata={'index': i, 'generated': True}
            )


class DataManager:
    """Manages data processing pipeline"""

    def __init__(self):
        self.processors: List[DataProcessor] = []
        self.data_cache: List[DataPoint] = []

    def add_processor(self, processor: DataProcessor):
        """Add a processor to the pipeline"""
        self.processors.append(processor)

    def load_data(self, count: int):
        """Load data into cache"""
        self.data_cache = list(DataGenerator.generate_data_points(count))
        print(f"Loaded {len(self.data_cache)} data points")

    def process_all(self) -> List[Dict]:
        """Process data through all processors"""
        results = []
        for processor in self.processors:
            result = processor.process(self.data_cache)
            results.append(result)
        return results

    async def async_process(self, data: List[DataPoint]) -> Dict:
        """Asynchronous data processing"""
        await asyncio.sleep(0.1)  # Simulate async operation
        return {'async_processed': len(data), 'timestamp': datetime.now().isoformat()}


async def main():
    """Main execution function"""
    print("=" * 60)
    print("Advanced Python Data Processing System")
    print("=" * 60)

    # Initialize manager and processors
    manager = DataManager()
    manager.add_processor(StatisticalProcessor("Stats-1"))
    manager.add_processor(StatisticalProcessor("Stats-2"))

    # Load and process data
    manager.load_data(100)
    results = manager.process_all()

    # Display results
    for idx, result in enumerate(results, 1):
        print(f"\nProcessor {idx} Results:")
        for key, value in result.items():
            print(f"  {key}: {value:.4f}" if isinstance(value, float) else f"  {key}: {value}")

    # Async processing
    async_result = await manager.async_process(manager.data_cache)
    print(f"\nAsync Result: {async_result}")

    print("\n" + "=" * 60)
    print("Processing Complete!")
    print("=" * 60)


if __name__ == "__main__":
    asyncio.run(main())
